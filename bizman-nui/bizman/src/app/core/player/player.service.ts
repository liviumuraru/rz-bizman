import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Subject } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PlayerService {
    playerDataSubject = new Subject<any>();
    activeCharacterDataSubject = new Subject<any>();

    allCharactersSubject = new Subject<any>();
    
    activeCharacter: any;
    playerData: any;

    constructor(private httpClient: HttpClient) {
        window.addEventListener('message', this.handleNativeEvent.bind(this));
    }

    async getPlayerData() {
        return this.httpClient.post('https://bizman/getPlayerData', {}).toPromise().then(data => {
            return this.playerDataSubject.pipe(take(1)).toPromise();
        });
    }

    async getAllCharacters() {
        //TODO orgman
        return this.httpClient.post('https://bizman/player/all/characters/all', {}).toPromise().then(data => {
            return this.allCharactersSubject.pipe(take(1)).toPromise();
        });
    }

    async getJudgeRoleId() {
        //TODO sync with DB
        return 1;
    }

    async getActiveCharacterData() {
        return this.activeCharacter;
    }

    changeActiveCharacter(newCharId: number) {
        this.activeCharacter = this.playerData.characters.find(char => char.id === newCharId);
        this.activeCharacterDataSubject.next(this.activeCharacter);
        return this.activeCharacter;
    }

    async handleNativeEvent(event: MessageEvent<any>) {
        switch (event?.data?.message) {
            case "rz://bizman/player/data":
                if (!this.activeCharacter) {
                    this.activeCharacter = event.data.data.characters[0];
                    this.activeCharacterDataSubject.next(this.activeCharacter);
                }
                this.playerData = event.data.data;
                this.playerDataSubject.next(event.data.data);
                break;

            case "rz://orgman/player/all/character/all":
                this.allCharactersSubject.next(event.data.data);
                break;

            default:
                break;
        }
    }
}