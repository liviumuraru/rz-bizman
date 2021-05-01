import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BusinessService {
    lastBusinessList: any[];
    businessDataSubject = new Subject<any[]>();
    businessListSubject = new Subject<any[]>();

    //TODO move to DB
    orgTypes = [
        {
            name: "Governmental institution",
            id: 1,
            legalStatusList: [
                "Governmental",
                "State-owned",
                "Jurisdictional",
                "Entity"
            ]
        },
        {
            name: "Corporation",
            id: 2,
            legalStatusList: [
                "Privately-owned",
                "Entity",
                "Shared entity"
            ]
        },
        {
            name: "Sole-proprietorship company",
            id: 3,
            legalStatusList: [
                "Privately-owned",
                "Single ownership entity"
            ]
        },
        {
            name: "Partenership",
            id: 4,
            legalStatusList: [
                "Privately-owned",
                "Entity",
                "Shared entity"
            ]
        },
        {
            name: "Limited liability company",
            id: 5,
            legalStatusList: [
                "Privately-owned",
                "Entity",
                "Shared entity",
                "Limited liability"
            ]
        },
        {
            name: "Cooperative",
            id: 6,
            legalStatusList: [
                "Privately-owned",
                "Entity",
                "Shared entity"
            ]
        }
    ]

    constructor(private httpClient: HttpClient) {
        window.addEventListener('message', this.handleNativeEvent.bind(this));
    }

    async getBusinesses(playerId?: string | number) {
        return this.httpClient.post('https://bizman/getOrganisations', {}).toPromise().then(data => {
            return this.businessListSubject.pipe(take(1)).toPromise();
        });
    }

    async getBusinessData(bussinessId: number) {
        await this.httpClient.post('https://bizman/getOrganisationData', {id: bussinessId}).toPromise();
        return this.businessDataSubject.pipe(take(1)).toPromise();
    }

    async handleNativeEvent(event: MessageEvent<any>) {
        switch (event?.data?.message) {
            case "rz://bizman/business/all":
                this.businessListSubject.next(event.data.data);
                break;

            case "rz://bizman/business/data":
                this.businessDataSubject.next(event.data.data);
                break;

            default:
                break;
        }
    }
}