import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BussinessService {
    dataSource = [
        {
            id: '1',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://preview.redd.it/axwgdg9l20s61.png?width=676&format=png&auto=webp&s=5fef4a4a178ea63b42f089ec54fa0dd08099aed6"
        },
        {
            id: '2',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius 😵 ; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://emoji.gg/assets/emoji/4081_SoonTM.png"
        },
        {
            id: '3',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://ih1.redbubble.net/image.665839698.1553/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
        },
        {
            id: '4',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://preview.redd.it/axwgdg9l20s61.png?width=676&format=png&auto=webp&s=5fef4a4a178ea63b42f089ec54fa0dd08099aed6"
        },
        {
            id: '5',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://emoji.gg/assets/emoji/4081_SoonTM.png"
        },
        {
            id: '6',
            name: "This is my bussiness. SOON^TM",
            subtitle: "This bussiness deals in lorem ipsums of the highest order. - Confucius; We sell illegal items. Audit us please 😂🍭🎉",
            imgSrc: "https://ih1.redbubble.net/image.665839698.1553/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
        }
    ];

    getBussinesses(playerId?: string | number) {
        //TODO integrate with actual data
        return of(this.dataSource)
    }

    getBussinessData(bussinessId: string | number) {
        //TODO establish data type of biz id
        //intentionally used implicit conversion equality operator
        return of(this.dataSource.find(item => item.id == bussinessId));
    }
}