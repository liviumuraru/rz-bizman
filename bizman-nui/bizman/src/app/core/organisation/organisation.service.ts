import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OrganisationService {
    orgRequestDataSubject = new Subject<any>();
    orgRequestListSubject = new Subject<any[]>();
    orgTypesSubject = new Subject<any[]>();
    orgNewRequestCreationSubject = new Subject<any>();

    constructor(private httpClient: HttpClient) {
        window.addEventListener('message', this.handleNativeEvent.bind(this));
    }

    async getOrgRequests(charId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/get/all', {charId}).toPromise().then(data => {
            return this.orgRequestListSubject.pipe(take(1)).toPromise();
        });
    }

    async getOrgRequestData(requestId: number) {
        //TODO orgman instead
        await this.httpClient.post('https://bizman/organisation/request/get/single', {id: requestId}).toPromise();
        return this.orgRequestDataSubject.pipe(take(1)).toPromise();
    }

    async getOrgTypes() {
        //TODO orgman instead
        await this.httpClient.post('https://bizman/organisation/types/get/all', {}).toPromise();
        return this.orgTypesSubject.pipe(take(1)).toPromise();
    }

    async postOrgRequest(data) {
        //TODO orgman instead
        await this.httpClient.post('https://bizman/organisation/request/create', data).toPromise();
        return this.orgNewRequestCreationSubject.pipe(take(1)).toPromise();
    }

    async handleNativeEvent(event: MessageEvent<any>) {
        switch (event?.data?.message) {
            case "rz://orgman/organisation/request/all":
                this.orgRequestListSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/request/single":
                this.orgRequestDataSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/types/all":
                this.orgTypesSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/request/create":
                this.orgNewRequestCreationSubject.next(event.data.data);
                break;

            default:
                break;
        }
    }
}