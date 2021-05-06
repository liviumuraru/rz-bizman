//TODO this is WIP a.f.
import { OrgType } from "./entity/orgtype.entity";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Player, Character, Organisation, Permission, Role } from "./entity/index";
import { OrganisationRequest } from "./entity/organisation-request.entity";
import { OrganisationRequestChat } from "./entity/organisation-request-chat.entity";
import { OrganisationRequestChatMessage } from "./entity/organisation-request-message.entity";
import { OrganisationRequestOwnershipQuantum } from "./entity/organisation-request-ownership-quantum.entity";

let dbConnection: Connection;

on("onServerResourceStart", async (resourceName) => {
    if (GetCurrentResourceName() !== resourceName) {
        return;
    }

    await ServerCore.getDbConnection().then(conn => {
        dbConnection = conn;
        ServerCore.registerEventHandlers();
        emitNet("rz:server:client://bizman/init", -1);
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class ServerCore {
    static getDbConnection(): Promise<Connection> {
        return createConnection({
            "type": "mysql",
            "host": "localhost",
            "port": 3306,
            "username": "",
            "password": "",
            "database": "",
            "synchronize": true,
            "logging": true,
            "logger": "advanced-console",
            "entities": [
                Player,
                Character,
                OrgType,
                Organisation,
                Permission,
                Role,
                OrganisationRequest,
                OrganisationRequestChat,
                OrganisationRequestChatMessage,
                OrganisationRequestOwnershipQuantum
            ],
            "migrations": [
                "src/server/migration/**/*.ts"
            ],
            "subscribers": [
                "src/server/subscriber/**/*.ts"
            ],
            "cli": {
                "entitiesDir": "src/server/entity",
                "migrationsDir": "src/server/migration",
                "subscribersDir": "src/server/subscriber"
            }
        }).catch(error => {
            console.error(JSON.stringify(error));
            return error;
        });
    }

    static async getPlayerWithPrimaryId(primaryFiveMId: string) {
        let dbPlayer: Player;
        dbPlayer = await dbConnection.getRepository(Player).findOne({
            where: {
                primaryFiveMId
            },
            relations: ['characters', 'characters.roles']
        }).catch(err => {
            console.error(JSON.stringify(err));
            return err;
        });

        return dbPlayer;
    }

    static async getPlayerFromSource(source: string) {
        const playerIdCount = GetNumPlayerIdentifiers(source);
        let dbPlayer: Player;

        for (let idx = 0; idx < playerIdCount; idx++) {
            const id = GetPlayerIdentifier(source, idx);
            //TODO identify players using a (license, license2) compound primary id
            if (/license2:/.test(id)) {
                dbPlayer = await dbConnection.getRepository(Player).findOne({
                    where: {
                        primaryFiveMId: id
                    },
                    relations: ['characters', 'characters.roles']
                }).catch(err => {
                    console.error(JSON.stringify(err));
                    return err;
                });
                break;
            }
        }

        return dbPlayer;
    }

    static async createPlayerEntity(primaryFiveMId: string) {
        const newPlayer = new Player();
        newPlayer.primaryFiveMId = primaryFiveMId;
        const char = new Character();
        char.firstName = 'JOHN';
        char.lastName = 'SMITH';

        await dbConnection.getRepository(Character).save(char);
        newPlayer.characters = [char];

        return dbConnection.getRepository(Player).save(newPlayer).then(saved => {
            return dbConnection.getRepository(Player).findOne({
                where: {
                    primaryFiveMId: primaryFiveMId
                },
                relations: ['characters', 'characters.roles']
            }).catch(err => {
                console.error(JSON.stringify(err))
                return err;
            });
        }).catch(err => {
            console.error(JSON.stringify(err));
            return err;
        });
    }

    static registerEventHandlers() {
        on("playerConnecting", async (playerName, kickFn, deferrals) => {
            deferrals.defer();
            await sleep(0);
            deferrals.update(`Your data is being loaded`);
            const playerIdCount = GetNumPlayerIdentifiers(source);

            for (let idx = 0; idx < playerIdCount; idx++) {
                const id = GetPlayerIdentifier(source, idx);
                //TODO identify players using a (license, license2) compound primary id
                if (/license2:/.test(id)) {
                    let dbPlayer: Player = await dbConnection.getRepository(Player).findOne({
                        where: {
                            primaryFiveMId: id
                        },
                        relations: ['characters', 'characters.roles']
                    }).catch(err => {
                        console.error(JSON.stringify(err));
                        return err;
                    });

                    if (!dbPlayer) {
                        await this.createPlayerEntity(id);
                    }

                    deferrals.done();
                    return;
                }
            }

            deferrals.done("Could not properly identify your identity. Make sure Steam is running.");
        });

        on("onServerResourceStop", async (resName) => {
            if (GetCurrentResourceName() !== resName) {
                return;
            }
            await dbConnection?.close();
        });

        onNet('rz:client:server://bizman/started', async () => {
            const dbPlayer = await this.getPlayerFromSource(source);
            dbPlayer.sessionSourceId = source;
            await dbConnection.getRepository(Player).save(dbPlayer);

            emitNet("rz:server:client://bizman/init", source);
        });

        onNet("rz:client:server://core/player/data", async () => {
            const playerIdCount = GetNumPlayerIdentifiers(source);

            for (let idx = 0; idx < playerIdCount; idx++) {
                const id = GetPlayerIdentifier(source, idx);
                //TODO identify players using a (license, license2) compound primary id
                if (/license2:/.test(id)) {
                    let dbPlayer: Player = await dbConnection.getRepository(Player).findOne({
                        where: {
                            primaryFiveMId: id
                        },
                        relations: ['characters', 'characters.roles']
                    }).catch(err => {
                        console.error(JSON.stringify(err));
                        return err;
                    });

                    console.log(JSON.stringify(`sending back ${JSON.stringify(dbPlayer)}`))

                    emitNet("rz:server:client://core/player/data", source, dbPlayer);
                }
            }
        });

        onNet("rz:client:server//core/player/all/character/all", async () => {
            const chars = await dbConnection.getRepository(Character).find({
                relations: ['roles']
            });
            emitNet("rz:server:client//core/player/all/character/all", source, chars);
        });

        onNet("rz:client:server://bizman/business/all", async () => {
            let orgs: Organisation[] = await dbConnection.getRepository(Organisation).find({
                relations: ['roles', 'characters', 'orgTypes']
            })
            //TODO only get self orgs
            emitNet("rz:server:client://bizman/business/all", source, orgs);
        });

        onNet("rz:client:server://bizman/business/data", async (data) => {
            //TODO only get self orgs
            const org: Organisation = await dbConnection.getRepository(Organisation).findOne({
                relations: ['roles', 'characters', 'orgTypes'],
                where: {
                    id: Number.parseInt(data.id)
                }
            })
            emitNet("rz:server:client://bizman/business/data", source, org);
        });

        onNet("rz:client:server://orgman/organisation/request/get/all", async (data) => {
            let dbPlayer: Player = await this.getPlayerFromSource(source);

            if (!dbPlayer) {
                //TODO emit error
                emitNet("rz:server:client://orgman/organisation/request/get/all/failed", source);
                return;
            }

            const creator = dbPlayer.characters.find(char => char.id == data.charId);

            if (!creator) {
                emitNet("rz:server:client://orgman/organisation/request/get/all/failed", source);
                return;
            }

            //TODO optimize
            const orgRequests: OrganisationRequest[] = await dbConnection.getRepository(OrganisationRequest).find({
                relations: ['orgTypes', 'participants', 'creator']
            });
            const filteredOrgReqs = orgRequests.filter(orgReq => {
                if (orgReq.participants.find(char => char.id === data.charId)) {
                    return true;
                }
                if (orgReq.creator.id === data.charId) {
                    return true;
                }
                return false;
            });

            emitNet("rz:server:client://orgman/organisation/request/get/all", source, filteredOrgReqs || []);
        });

        onNet("rz:client:server://orgman/organisation/request/management/get/all", async (data) => {
            const dbPlayer = await this.getPlayerFromSource(source);

            if (!dbPlayer) {
                //TODO emit error
                emitNet("rz:server:client://orgman/organisation/request/management/get/all/failed", source);
                return;
            }

            const creator = dbPlayer.characters.find(char => char.id == data.charId);
            const orgRequests: OrganisationRequest[] = await dbConnection.getRepository(OrganisationRequest).find({
                relations: ['orgTypes', 'creator', 'participants']
            });

            //TODO get judge role dynamically
            const isAuthorised = creator?.roles?.find(role => role.id === 1) ? true : false;

            if (!creator || !isAuthorised) {
                emitNet("rz:client:server://orgman/organisation/request/management/get/all/failed", source);
                return;
            }

            emitNet("rz:server:client://orgman/organisation/request/management/get/all", source, orgRequests || []);
        });

        onNet("rz:client:server://orgman/organisation/request/get/single", async (data) => {
            let dbPlayer: Player = await this.getPlayerFromSource(source);

            if (!dbPlayer) {
                emitNet("rz:server:client://orgman/organisation/request/get/single/failed", source);
                return;
            }

            await dbConnection.transaction(async manager => {
                let orgReq: OrganisationRequest = await manager.getRepository(OrganisationRequest).findOne({
                    where: {id: data.id},
                    order: {
                        chat: "ASC"
                    },
                    lock: {
                        mode: 'pessimistic_write'
                    },
                    relations: ['orgTypes', 'creator', 'participants', 'participants.roles', 'chat', 'chat.messages', 'chat.messages.sender', 'ownershipQuantums', 'ownershipQuantums.character']
                }).catch(err => {
                    console.error(JSON.stringify(err));
                    return err;
                });
    
                if (!orgReq.participants.find(char => char.id === data.currentCharId)) {
                    emitNet("rz:server:client://orgman/organisation/request/get/single/failed", source);
                    return;
                }
    
                const possibleParticipants = await manager.getRepository(Character).find({
                    relations: ['roles']
                });
    
                //TODO optimize this
                //TODO get judge role dynamically
                let judgeCharacters = possibleParticipants.filter(char => char.roles.find(role => role.id === 1));
    
                //filter first judge-created request participant out of the array so that the entry will not be duplicated in the db
                const idxToRemove = judgeCharacters.findIndex(judgeChar => judgeChar.id === orgReq.creator.id);
                if (idxToRemove >= 0) {
                    judgeCharacters.splice(idxToRemove, 1);
                }
    
                const judgesToAdd = [];
    
                judgeCharacters.forEach(judge => {
                    if (!orgReq.participants.find(participant => participant.id === judge.id)) {
                        judgesToAdd.push(judge);
                    }
                });
    
                if (judgesToAdd?.length > 0) {
                    orgReq.participants.push(...judgesToAdd);
                    //TODO this could be an issue
                    //if 2 people try to update at the same time, it becomes a race condition
                    orgReq = await manager.getRepository(OrganisationRequest).save(orgReq);
                }
    
                const orgReqResponse = {
                    ...orgReq,
                    possibleParticipants
                };
    
                emitNet("rz:server:client://orgman/organisation/request/get/single", source, orgReqResponse);
            });
        });

        onNet("rz:client:server://orgman/organisation/request/create", async (data) => {
            let dbPlayer: Player = await this.getPlayerFromSource(source);

            if (!dbPlayer) {
                emitNet("rz:server:client://orgman/organisation/request/failed", source, []);
                return;
            }

            const creator = dbPlayer.characters.find(char => char.id == data.creatorCharId);

            if (!creator) {
                emitNet("rz:server:client://orgman/organisation/request/failed", source, []);
                return;
            }

            const dbOrgTypes = await dbConnection.getRepository(OrgType).find({
                where: {
                    id: data.organisationTypes
                }
            });

            const orgReq = new OrganisationRequest();
            orgReq.name = data.name;
            orgReq.denied = false;
            orgReq.location = data.location;
            orgReq.approved = false;
            orgReq.businessPlan = data.purpose;
            orgReq.creator = creator;
            orgReq.orgTypes = dbOrgTypes;
            
            const chat = new OrganisationRequestChat();
            chat.messages = [];
            const insertedChat = await dbConnection.getRepository(OrganisationRequestChat).save(chat);

            orgReq.chat = insertedChat;
            orgReq.participants = data.participants;
            orgReq.totalShares = data.totalShares;

            let inserted = await dbConnection.getRepository(OrganisationRequest).save(orgReq);

            let quantums: OrganisationRequestOwnershipQuantum[] = [];
            for (let index = 0; index < data.owners.length; index++) {
                let owner = data.owners[index];
                let newOrgOwnerQuantum = new OrganisationRequestOwnershipQuantum();
                newOrgOwnerQuantum.flatShares = owner.flatShares;
                newOrgOwnerQuantum.character = await dbConnection.getRepository(Character).findOne({where: {id:owner.id}});
                quantums.push(newOrgOwnerQuantum);
            }

            inserted.ownershipQuantums = quantums;
            inserted = await dbConnection.getRepository(OrganisationRequest).save(orgReq);

            emitNet("rz:server:client://orgman/organisation/request/create", source, inserted);
        });

        onNet("rz:client:server://orgman/organisation/types/get/all", async _ => {
            const orgTypes: OrgType[] = await dbConnection.getRepository(OrgType).find();
            emitNet("rz:server:client://orgman/organisation/types/get/all", source,orgTypes);
        });

        onNet("rz:client:server://orgman/organisation/request/chat/message/post", async (data) => {
            const orgReq = await dbConnection.getRepository(OrganisationRequest).findOne({
                where: {
                    id: data.orgRequestId
                },
                relations: ['creator', 'chat', 'chat.messages', 'participants', 'creator.player', 'participants.player']
            });

            const senderChar = orgReq.participants.find(char => char.id === data.charId);

            if (!senderChar) {
                emitNet("rz:server:client://orgman/organisation/request/chat/message/post/failed", source);
                return;
            }

            const messageObj = new OrganisationRequestChatMessage();
            messageObj.datetime = new Date();
            messageObj.message = data.message;
            //TODO active character
            messageObj.sender = senderChar;
            
            const savedMsgObj = await dbConnection.getRepository(OrganisationRequestChatMessage).save(messageObj);
            orgReq.chat.messages.push(savedMsgObj);
            await dbConnection.getRepository(OrganisationRequestChat).save(orgReq.chat);
            emitNet("rz:server:client://orgman/organisation/request/chat/message/post/success", source, savedMsgObj);
        });

        onNet("rz:client:server://orgman/organisation/request/participant/add", async (data) => {
            const orgReq = await dbConnection.getRepository(OrganisationRequest).findOne({
                where: {
                    id: data.orgRequestId
                },
                relations: ['participants']
            });

            const charToAdd = await dbConnection.getRepository(Character).findOne({
                where: {
                    id: data.participantId
                }
            })

            if (!orgReq || !charToAdd || !orgReq.participants.find(char => char.id === data.adderId)) {
                emitNet("rz:server:client://orgman/organisation/request/participant/add/failed", source);
                return;
            }

            
            orgReq.participants.push(charToAdd);
            await dbConnection.getRepository(OrganisationRequest).save(orgReq);
            emitNet("rz:server:client://orgman/organisation/request/participant/add/success", source, charToAdd);
        });

        onNet("rz:client:server://orgman/organisation/request/participant/remove", async (data) => {
            const orgReq = await dbConnection.getRepository(OrganisationRequest).findOne({
                where: {
                    id: data.orgRequestId
                },
                relations: ['participants']
            });

            const charToRemove = await dbConnection.getRepository(Character).findOne({
                where: {
                    id: data.participantId
                }
            });

            if (!orgReq || !charToRemove || !orgReq.participants.find(char => char.id === data.removerId) || !orgReq.participants.find(char => char.id === data.participantId)) {
                emitNet("rz:server:client://orgman/organisation/request/participant/remove/failed", source);
                return;
            }

            const idxToRemove = orgReq.participants.findIndex(char => char.id === data.participantId);
            
            orgReq.participants.splice(idxToRemove, 1);
            await dbConnection.getRepository(OrganisationRequest).save(orgReq);
            emitNet("rz:server:client://orgman/organisation/request/participant/remove/success", source, charToRemove);
        });

        onNet("rz:client:server://orgman/organisation/request/approve", async (data) => {
            const orgReq = await dbConnection.getRepository(OrganisationRequest).findOne({
                where: {
                    id: data.orgId
                },
                relations: ['creator']
            });

            const actionChar = await dbConnection.getRepository(Character).findOne({
                where: {
                    id: data.charId
                },
                relations: ['roles']
            });

            const dbPlayer = await this.getPlayerFromSource(source);

            if (!dbPlayer?.characters?.find(char => char.id === actionChar.id)) {
                emitNet("rz:server:client://orgman/organisation/request/approve/failed", source);
                return;
            }

            //TODO judge id
            if (!actionChar.roles.find(role => role.id === 1)) {
                emitNet("rz:server:client://orgman/organisation/request/approve/failed", source);
                return;
            }

            if (orgReq.approved || orgReq.denied) {
                emitNet("rz:server:client://orgman/organisation/request/approve/failed", source);
                return;
            }

            orgReq.approved = true;
            orgReq.denied = false;
            
            await dbConnection.getRepository(OrganisationRequest).save(orgReq);
            emitNet("rz:server:client://orgman/organisation/request/approve/success", source);
        });

        onNet("rz:client:server://orgman/organisation/request/deny", async (data) => {
            const orgReq = await dbConnection.getRepository(OrganisationRequest).findOne({
                where: {
                    id: data.orgId
                },
                relations: ['creator']
            });

            const actionChar = await dbConnection.getRepository(Character).findOne({
                where: {
                    id: data.charId
                },
                relations: ['roles']
            });

            const dbPlayer = await this.getPlayerFromSource(source);

            if (!dbPlayer?.characters?.find(char => char.id === actionChar.id)) {
                emitNet("rz:server:client://orgman/organisation/request/deny/failed", source);
                return;
            }

            if (orgReq.approved || orgReq.denied) {
                emitNet("rz:server:client://orgman/organisation/request/deny/failed", source);
                return;
            }

            //TODO judge id
            if (!actionChar.roles.find(role => role.id === 1)) {
                emitNet("rz:server:client://orgman/organisation/request/deny/failed", source);
                return;
            }
            else if (orgReq.creator.id === actionChar.id) {
                emitNet("rz:server:client://orgman/organisation/request/deny/failed", source);
                return;
            }

            orgReq.approved = false;
            orgReq.denied = true;
            
            await dbConnection.getRepository(OrganisationRequest).save(orgReq);
            emitNet("rz:server:client://orgman/organisation/request/deny/success", source);
        });
    }
}