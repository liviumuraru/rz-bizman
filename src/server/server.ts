//TODO this is WIP a.f.
import { OrgType } from "./entity/orgtype.entity";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Player, Character, Organisation, Permission, Role } from "./entity/index";
import { OrganisationRequest } from "./entity/organisation-request.entity";

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
            "host": "",
            "port": 3306,
            "username": "",
            "password": "",
            "database": "rz_test",
            "synchronize": true,
            "logging": true,
            "entities": [
                Player,
                Character,
                OrgType,
                Organisation,
                Permission,
                Role,
                OrganisationRequest
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
                        const newPlayer = new Player();
                        newPlayer.primaryFiveMId = id;
                        const char = new Character();
                        char.firstName = 'JOHN';
                        char.lastName = 'SMITH';

                        await dbConnection.getRepository(Character).save(char);

                        newPlayer.characters = [char];

                        await dbConnection.getRepository(Player).save(newPlayer).catch(err => {
                            console.error(JSON.stringify(err));
                            return err;
                        });
                        dbPlayer = await dbConnection.getRepository(Player).findOne({
                            where: {
                                primaryFiveMId: id
                            },
                            relations: ['characters', 'characters.roles']
                        }).catch(err => {
                            console.error(JSON.stringify(err))
                            return err;
                        });
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

        onNet('rz:client:server://bizman/started', () => {
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

                    emitNet("rz:server:client://core/player/data", source, dbPlayer);
                }
            }
        });

        onNet("rz:client:server://bizman/business/all", async () => {
            let orgs: Organisation[] = await dbConnection.getRepository(Organisation).find({
                relations: ['roles', 'characters', 'orgTypes']
            })
            emitNet("rz:server:client://bizman/business/all", source, orgs);
        });

        onNet("rz:client:server://bizman/business/data", async (data) => {
            const org: Organisation = await dbConnection.getRepository(Organisation).findOne({
                relations: ['roles', 'characters', 'orgTypes'],
                where: {
                    id: Number.parseInt(data.id)
                }
            })
            emitNet("rz:server:client://bizman/business/data", source, org);
        });

        onNet("rz:client:server://orgman/organisation/request/get/all", async (data) => {
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
                        relations: ['characters']
                    }).catch(err => {
                        console.error(JSON.stringify(err));
                        return err;
                    });
                }
            }

            if (!dbPlayer) {
                //TODO emit error
                emitNet("rz:server:client://orgman/organisation/request/get/all", source, []);
                return;
            }

            const creator = dbPlayer.characters.find(char => char.id == data.charId);

            if (!creator) {
                emitNet("rz:client:server://orgman/organisation/request/failed", source, []);
                return;
            }

            const orgRequests: OrganisationRequest[] = await dbConnection.getRepository(OrganisationRequest).find({
                where: {
                    creator: {id: creator.id}
                },
                relations: ['orgTypes', 'creator']
            });
            emitNet("rz:server:client://orgman/organisation/request/get/all", source, orgRequests || []);
        });

        onNet("rz:client:server://orgman/organisation/request/get/single", data => {
            //TODO
            emitNet("rz:server:client://orgman/organisation/request/get/single", source, {});
        });

        onNet("rz:client:server://orgman/organisation/request/create", async (data) => {
            const playerIdCount = GetNumPlayerIdentifiers(source);
            let dbPlayer: Player;

            //TODO check if character has new request role
            for (let idx = 0; idx < playerIdCount; idx++) {
                const id = GetPlayerIdentifier(source, idx);
                //TODO identify players using a (license, license2) compound primary id
                if (/license2:/.test(id)) {
                    dbPlayer = await dbConnection.getRepository(Player).findOne({
                        where: {
                            primaryFiveMId: id
                        },
                        relations: ['characters']
                    }).catch(err => {
                        console.error(JSON.stringify(err));
                        return err;
                    });
                }
            }

            if (!dbPlayer) {
                emitNet("rz:server:client://orgman/organisation/request/failed", source, []);
                return;
            }

            const creator = dbPlayer.characters.find(char => char.id == data.creatorCharId);

            if (!creator) {
                emitNet("rz:server:client://orgman/organisation/request/failed", source, []);
                return;
            }

            console.log('found creator', JSON.stringify(creator));
            console.log(JSON.stringify(data))

            const dbOrgTypes = await dbConnection.getRepository(OrgType).findByIds(data.organisationTypes); 

            const orgReq = new OrganisationRequest();
            orgReq.name = data.name;
            orgReq.location = data.location;
            orgReq.approved = false;
            orgReq.businessPlan = data.purpose;
            orgReq.creator = creator;
            orgReq.orgTypes = dbOrgTypes;

            console.log('set all fields');

            const inserted = await dbConnection.getRepository(OrganisationRequest).save(orgReq);

            emitNet("rz:server:client://orgman/organisation/request/create", source, inserted);
        });

        onNet("rz:client:server://orgman/organisation/types/get/all", async _ => {
            const orgTypes: OrgType[] = await dbConnection.getRepository(OrgType).find();
            emitNet("rz:server:client://orgman/organisation/types/get/all", source,orgTypes);
        });
    }
}