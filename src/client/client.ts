import { Subject } from "rxjs";
import { take } from 'rxjs/operators';

const UI_INPUT_MODE_CAPTURE = 0;
const UI_INPUT_MODE_FALLTHROUGH = 1;

let isUIBeingShown = false;
let uiInputMode = UI_INPUT_MODE_CAPTURE;

interface IPlayer {
    characters: ICharacter[];
}

interface ICharacter {
    organisations: IOrganisation[];
}

interface IOrganisation {
    name: string;
    description: string;
}

interface IRole {
    name: string;
    description?: string;
}

interface IPermission {
    name: string;
    description?: string;
}

let playerData;
let characterData: ICharacter;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getOrganisationsSubject = new Subject();
const getOrganisationDataSubject = new Subject();
const getPlayerDataSubject = new Subject();

const getPersonalOrgRequestList = new Subject();
const getPersonalOrgRequestData = new Subject();
const getOrgTypes = new Subject();
const postNewOrgRequest = new Subject();

const getManagementOrgRequestList = new Subject();
const postOrgRequestChatMessage = new Subject();

const addParticipantToOrgRequest = new Subject();
const removeParticipantFromOrgRequest = new Subject();
const allCharactersSubject = new Subject();

const orgRequestDeny = new Subject();
const orgRequestApprove = new Subject();

on('onClientResourceStart', async (resourceName) => {
    if(GetCurrentResourceName() !== resourceName) {
        return;
    }

    onNet('rz:server:client://bizman/init', async () => {
        ClientCore.registerNuiEvents();
        ClientCore.registerEventHandlers();
        ClientCore.registerKeyPolling();
        ClientCore.registerOrgPersonalRequestEventHandlers();
        ClientCore.registerOrganisationRequestActionsEventHandlers();
    });
    emitNet('rz:client:server://bizman/started');
});

class ClientCore {
    static registerKeyPolling() {
        setTick(async () => {
            if (IsControlJustReleased(1, 74)) {
                console.log('showing ui')
                SendNuiMessage(JSON.stringify({
                    message: "rz://gameplay/bizman/toggleDisplay"
                }));
            }
        });
    }

    static registerNuiEvents() {
        RegisterNuiCallbackType('onUIToggled');
        RegisterNuiCallbackType('getOrganisations');
        RegisterNuiCallbackType('getOrganisationData');
        RegisterNuiCallbackType('getPlayerData');

        RegisterNuiCallbackType('organisation/request/get/all');
        RegisterNuiCallbackType('organisation/request/get/single');
        RegisterNuiCallbackType('organisation/types/get/all');
        RegisterNuiCallbackType('organisation/request/create');

        RegisterNuiCallbackType('organisation/request/management/get/all');
        RegisterNuiCallbackType('organisation/request/chat/message/post');

        RegisterNuiCallbackType('organisation/request/participant/add');
        RegisterNuiCallbackType('organisation/request/participant/remove');
        RegisterNuiCallbackType('player/all/characters/all');

        RegisterNuiCallbackType('organisation/request/approve');
        RegisterNuiCallbackType('organisation/request/deny');
    }

    static registerOrgPersonalRequestEventHandlers() {
        getPersonalOrgRequestList.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/all",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/get/all', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/get/all", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/request/get/all", (data) => {
            getPersonalOrgRequestList.next(data);
        });

        allCharactersSubject.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/player/all/character/all",
                data
            })); 
        });

        on('__cfx_nui:player/all/characters/all', async (data, cb) => {
            emitNet("rz:client:server//core/player/all/character/all", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client//core/player/all/character/all", (data) => {
            allCharactersSubject.next(data);
        });

        addParticipantToOrgRequest.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/participant/add/success",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/participant/add', (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/participant/add", data);
            cb({status: 200});
        });

        onNet("rz:server:client://orgman/organisation/request/participant/add/success", (data) => {
            addParticipantToOrgRequest.next(data);
        });

        removeParticipantFromOrgRequest.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/participant/remove/success",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/participant/remove', (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/participant/remove", data);
            cb({status: 200});
        });

        onNet("rz:server:client://orgman/organisation/request/participant/remove/success", (data) => {
            removeParticipantFromOrgRequest.next(data);
        });

        postOrgRequestChatMessage.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/chat/message/post/success",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/chat/message/post', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/chat/message/post", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/request/chat/message/post/success", (data) => {
            postOrgRequestChatMessage.next(data);
        });

        getManagementOrgRequestList.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/management/all",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/management/get/all', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/management/get/all", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/request/management/get/all", (data) => {
            getManagementOrgRequestList.next(data);
        });

        getPersonalOrgRequestData.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/single",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/get/single', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/get/single", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/request/get/single", (data) => {
            getPersonalOrgRequestData.next(data);
        });

        getOrgTypes.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/types/all",
                data
            })); 
        });

        on('__cfx_nui:organisation/types/get/all', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/types/get/all");
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/types/get/all", (data) => {
            getOrgTypes.next(data);
        });

        postNewOrgRequest.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/create",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/create', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/create", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/request/create", (data) => {
            postNewOrgRequest.next(data);
        });
    }

    static registerOrganisationRequestActionsEventHandlers() {
        orgRequestDeny.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/deny/success",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/deny', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/deny", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/request/deny/success", (data) => {
            orgRequestDeny.next(data);
        });

        orgRequestApprove.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://orgman/organisation/request/approve/success",
                data
            })); 
        });

        on('__cfx_nui:organisation/request/approve', async (data, cb) => {
            emitNet("rz:client:server://orgman/organisation/request/approve", data);
            cb({status: 200});
        }); 

        onNet("rz:server:client://orgman/organisation/request/approve/success", (data) => {
            orgRequestApprove.next(data);
        });
    }

    static registerEventHandlers() {
        getOrganisationsSubject.subscribe((data) => {
            SendNuiMessage(JSON.stringify({
                message: "rz://bizman/business/all",
                data
            }));
        });

        getOrganisationDataSubject.subscribe((data) => {
            SendNuiMessage(JSON.stringify({
                message: "rz://bizman/business/data",
                data
            }));
        });

        getPlayerDataSubject.subscribe(data => {
            SendNuiMessage(JSON.stringify({
                message: "rz://bizman/player/data",
                data
            })); 
        });

        on('__cfx_nui:getPlayerData', async (data, cb) => {
            //await sleep(2500);
            emitNet("rz:client:server://core/player/data");
            cb({status: 200});
        }); 

        onNet("rz:server:client://core/player/data", (player) => {
            getPlayerDataSubject.next(player);
        });

        on('__cfx_nui:getOrganisations', async (data, cb) => {
            //await sleep(2500);
            emitNet("rz:client:server://bizman/business/all");
            cb({status: 200});
        });        

        onNet("rz:server:client://bizman/business/all", (businesses) => {
            getOrganisationsSubject.next(businesses);
        });
        
        on('__cfx_nui:getOrganisationData', async (data, cb) => {
            //await sleep(2500);
            emitNet("rz:client:server://bizman/business/data", data);
            cb({status: 200});
        });

        onNet("rz:server:client://bizman/business/data", (businessData) => {
            getOrganisationDataSubject.next(businessData);
        });

        on('__cfx_nui:onUIToggled', (data, cb) => {
            isUIBeingShown = data.showUI;
            if (uiInputMode === UI_INPUT_MODE_CAPTURE) {
                SetNuiFocus(isUIBeingShown, isUIBeingShown);
            }
            else {
                SetNuiFocus(isUIBeingShown, isUIBeingShown);
                SetNuiFocusKeepInput(isUIBeingShown);
            }
            
            cb(data);
        });
    }
}