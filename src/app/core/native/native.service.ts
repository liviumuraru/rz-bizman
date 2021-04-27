import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export enum NativeMessageType {
    TOGGLE_UI = 'rz://gameplay/bizman/toggleDisplay'
}

export function sleepPromise(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

@Injectable({providedIn: 'root'})
export class NativeService {
    showUI = false;

    constructor(private httpClient: HttpClient, private router: Router) {
        window.addEventListener('message', this.handleNativeEvent.bind(this));
        window.addEventListener('keyup', this.handleKeyupEvent.bind(this));
    }

    async closeUI() {
        this.showUI = false;
        await this.httpClient.post('https://bizman/onUIToggled', JSON.stringify({
            showUI: this.showUI
        })).toPromise();
        await this.router.navigate(['/']);
    }

    async handleKeyupEvent(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            await this.closeUI();
        }
    }

    async handleNativeEvent(event: MessageEvent<any>) {
        switch (event?.data?.message) {
            case NativeMessageType.TOGGLE_UI:
                this.showUI = !this.showUI;
                await this.httpClient.post('https://bizman/onUIToggled', JSON.stringify({
                    showUI: this.showUI
                })).toPromise();
                if (this.showUI) {
                    await this.router.navigate(['/']);
                }

                break;

            default:
                throw new Error(`Event is invalid or event handler is missing for event message: ${event.data.message}`);
        }
    }

    shouldShowUI() {
        return this.showUI;
    }    
}