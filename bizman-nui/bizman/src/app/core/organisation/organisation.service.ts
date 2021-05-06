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

    orgRequestListAsManagerSubject = new Subject<any[]>();
    orgRequestPostMessageSubject = new Subject<any>();

    addParticipantToOrgReqSubject = new Subject<any>();
    removeParticipantFromOrgReqSubject = new Subject<any>();

    orgRequestDenySubject = new Subject<any>();
    orgRequestApproveSubject = new Subject<any>();

    constructor(private httpClient: HttpClient) {
        window.addEventListener('message', this.handleNativeEvent.bind(this));
    }

    async getOrgRequestsAsManager(charId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/management/get/all', {charId}).toPromise().then(data => {
            return this.orgRequestListAsManagerSubject.pipe(take(1)).toPromise();
        });
    }

    async getOrgRequests(charId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/get/all', {charId}).toPromise().then(data => {
            return this.orgRequestListSubject.pipe(take(1)).toPromise();
        });
    }

    async getOrgRequestData(requestId: number, currentCharId: number) {
        //TODO orgman instead
        await this.httpClient.post('https://bizman/organisation/request/get/single', {id: requestId, currentCharId}).toPromise();
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

    async postOrgRequestMessage(orgRequestId: number, message: string, charId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/chat/message/post', {orgRequestId, message, charId}).toPromise().then(data => {
            return this.orgRequestPostMessageSubject.pipe(take(1)).toPromise();
        });
    }

    async addParticipantToOrgRequest(participantId: number, adderId: number, orgRequestId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/participant/add', { participantId, adderId, orgRequestId }).toPromise().then(data => {
            return this.addParticipantToOrgReqSubject.pipe(take(1)).toPromise();
        });
    }

    async removeParticipantFromOrgRequest(participantId: number, removerId: number, orgRequestId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/participant/remove', { participantId, removerId, orgRequestId }).toPromise().then(data => {
            return this.removeParticipantFromOrgReqSubject.pipe(take(1)).toPromise();
        });
    }

    async denyOrganisationRequest(orgId: number, charId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/deny', { orgId, charId }).toPromise().then(data => {
            return this.orgRequestDenySubject.pipe(take(1)).toPromise();
        });
    }

    async approveOrganisationRequest(orgId: number, charId: number) {
        //TODO orgman instead
        return this.httpClient.post('https://bizman/organisation/request/approve', { orgId, charId }).toPromise().then(data => {
            return this.orgRequestApproveSubject.pipe(take(1)).toPromise();
        });
    }

    async handleNativeEvent(event: MessageEvent<any>) {
        switch (event?.data?.message) {
            case "rz://orgman/organisation/request/all":
                this.orgRequestListSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/request/management/all":
                this.orgRequestListAsManagerSubject.next(event.data.data);
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

            case "rz://orgman/organisation/request/chat/message/post/success":
                this.orgRequestPostMessageSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/request/participant/add/success":
                this.addParticipantToOrgReqSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/request/participant/remove/success":
                this.removeParticipantFromOrgReqSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/request/approve/success":
                this.orgRequestApproveSubject.next(event.data.data);
                break;

            case "rz://orgman/organisation/request/deny/success":
                this.orgRequestDenySubject.next(event.data.data);
                break;

            default:
                break;
        }
    }
}