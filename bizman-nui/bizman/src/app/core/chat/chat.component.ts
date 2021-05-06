import { Component, Input } from "@angular/core";
import * as moment from 'moment';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
    @Input()
    messages: any[];
    @Input()
    selfChar: any;

    constructor() {
        
    }

    getDisplayName(message) {
        let name = '';
        if (message.sender?.id) {
            name = `${message.sender?.firstName} ${message.sender?.lastName} (${message.sender?.id}):`;
        }
        else {
            name = 'Anonymous:'
        }
        return name;
    }

    isSelfMessage(message) {
        if (message.sender?.id === this.selfChar.id) {
            return true;
        }

        return false;
    }

    getDisplayDateTime(message) {
        const momentDate = moment(message.datetime);
        return momentDate.format('DD/MM/YYYY');
    }
}