import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BusinessService {
    dataSource = [
        {
            id: '1',
            name: "Blaine County Sheriffs Office",
            subtitle: "Freck the freckles off your face, you're going under boi 👮‍♂️",
            imgSrc: "/assets/bcso_logo.png",
            orgTypeId: 1,
            legalStatusList: [
                "Better than LSPD",
            ]
        },
        {
            id: '2',
            name: "Los Santos Police Department",
            subtitle: "PULL OVER YOU SCUM 🚔🚨🚨🚔",
            imgSrc: "/assets/lspd_logo.png",
            orgTypeId: 1,
            legalStatusList: [
                "Better than BCSO"
            ]
        },
        {
            id: '3',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://ih1.redbubble.net/image.665839698.1553/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
            orgTypeId: 3
        },
        {
            id: '4',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://preview.redd.it/axwgdg9l20s61.png?width=676&format=png&auto=webp&s=5fef4a4a178ea63b42f089ec54fa0dd08099aed6",
            orgTypeId: 4
        },
        {
            id: '5',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://emoji.gg/assets/emoji/4081_SoonTM.png",
            orgTypeId: 5
        },
        {
            id: '6',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://ih1.redbubble.net/image.665839698.1553/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
            orgTypeId: 6
        }
    ];

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

    getBusinesses(playerId?: string | number) {
        //TODO integrate with actual data
        return of(this.dataSource)
    }

    getBusinessData(bussinessId: string | number) {
        //TODO establish data type of biz id
        //intentionally used implicit conversion equality operator
        return of(this.dataSource.find(item => item.id == bussinessId));
    }

    getOrgTypes() {
        return of(this.orgTypes);
    }
}