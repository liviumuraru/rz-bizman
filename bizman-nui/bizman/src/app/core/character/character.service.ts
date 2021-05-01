import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { PlayerService } from "../player/player.service";

@Injectable({ providedIn: 'root' })
export class CharacterService {
    characterDataSubject = new Subject();

    constructor(private httpClient: HttpClient, private playerService: PlayerService) {
    }

    async getCharacterData(characterId: number | string) {
        return this.playerService.getPlayerData().then((data: any) => {
            return data.characters.filter(char => char.id == characterId);
        });
    }
}