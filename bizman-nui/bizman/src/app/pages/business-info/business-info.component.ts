import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'business-info',
    templateUrl: './business-info.component.html',
    styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent {
    @Input()
    enableGoBack = false;
    @Input()
    business;

    constructor(private router: Router) {
    }
    
    async goBack() {
        //TODO relative routes
        // /business/:id
        await this.router.navigate(['/bussiness']);
    }
}