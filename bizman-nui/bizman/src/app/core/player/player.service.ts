import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class PlayerService {
    playerDataSubject = new Subject<any>();

    constructor(private httpClient: HttpClient) {
        window.addEventListener('message', this.handleNativeEvent.bind(this));
    }

    async getPlayerData() {
        return this.httpClient.post('https://bizman/getPlayerData', {}).toPromise().then(data => {
            return this.playerDataSubject.pipe(take(1)).toPromise();
        });
    }

    async handleNativeEvent(event: MessageEvent<any>) {
        switch (event?.data?.message) {
            case "rz://bizman/player/data":
                this.playerDataSubject.next(event.data.data);
                console.log('got player', event.data.data)
                break;

            default:
                break;
        }
    }
}