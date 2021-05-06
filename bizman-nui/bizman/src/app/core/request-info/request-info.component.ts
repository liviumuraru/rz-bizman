import { Component, Input } from "@angular/core";

@Component({
    selector: 'request-info',
    templateUrl: './request-info.component.html',
    styleUrls: ['./request-info.component.scss']
})
export class OrganisationRequestInfoComponent {
    @Input()
    request: any;

    constructor() {
        
    }
}