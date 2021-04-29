//TODO this is WIP a.f.

import { Player } from "./entity/player.entity";
import "reflect-metadata";
import { Connection, createConnection } from "typeorm";

let dbConnection: Connection;

on("onResourceStart", async (resourceName) => {
    if (GetCurrentResourceName() !== resourceName) {
        return;
    }

    await ServerCore.getDbConnection().then(conn => {
        dbConnection = conn;
        ServerCore.registerEventHandlers();
    });
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class ServerCore {
    static getDbConnection(): Promise<Connection> {
        return createConnection({
            "type": "mysql",
            "host": "NICE_TRY",
            "port": 3306,
            "username": "NICE_TRY",
            "password": "NICE_TRY",
            "database": "rz_test",
            "synchronize": true,
            "logging": true,
            "entities": [
                Player
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
            //TODO defer login until all data succesfully transacted

            for (let idx = 0; idx < playerIdCount; idx++) {
                const id = GetPlayerIdentifier(source, idx);
                //TODO identify players using a (license, license2) compound primary id
                if (/discord:/.test(id)) {
                    let dbPlayer = await dbConnection.getRepository(Player).findOne({
                        where: {
                            steamIdHex: id
                        }
                    }).catch(err => {
                        console.error(JSON.stringify(err))
                    });

                    if (!dbPlayer) {
                        const newPlayer = new Player();
                        newPlayer.steamIdHex = id;
                        await dbConnection.getRepository(Player).insert(newPlayer).catch(err => {
                            console.error(JSON.stringify(err))
                        });
                        dbPlayer = await dbConnection.getRepository(Player).findOne({
                            where: {
                                steamIdHex: id
                            }
                        }).catch(err => {
                            console.error(JSON.stringify(err))
                        });
                    }

                    deferrals.done();
                    emit("rz:server:server://core/player/login", dbPlayer);
                    //emitNet("rz:server:client://core/player/loggedIn", source, dbPlayer);
                }
            }
        });

        on("rz:server:server://core/player/login", (player) => {
            console.log(`player logged in: ${JSON.stringify(player)}`);
        });

        on("onResourceStop", async (resName) => {
            if (GetCurrentResourceName() !== resName) {
                return;
            }
            await dbConnection?.close();
        });
    }
}
