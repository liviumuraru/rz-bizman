import { Component, Input } from "@angular/core";

@Component({
    selector: 'business-legal-status-list',
    templateUrl: './business-legal-status-list.component.html',
    styleUrls: ['./business-legal-status-list.component.scss']
})
export class BusinessLegalStatusListComponent {
    @Input()
    legalStatusList: any[];
}