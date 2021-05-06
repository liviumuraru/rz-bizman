import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";

@Component({
    selector: 'chat-send',
    templateUrl: './chat-send.component.html',
    styleUrls: ['./chat-send.component.scss']
})
export class ChatSendComponent {
    @Output('onSubmit')
    onSubmitEE = new EventEmitter<{
        message: string
    }>();
    onSubmitSubject = new Subject<{
        message: string
    }>();

    chatMessageFc = new FormControl('')

    constructor() {
        
    }

    onSubmit() {
        if (!this.chatMessageFc.valid) {
            return;
        }

        if (!this.chatMessageFc.value) {
            this.chatMessageFc.setErrors({required: true});
            return;
        }

        const payload = {
            message: this.chatMessageFc.value
        };

        this.onSubmitEE.emit(payload);
        this.onSubmitSubject.next(payload);

        this.chatMessageFc.setValue('');
    }
}