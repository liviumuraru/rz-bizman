import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BusinessService } from "src/app/core/bussiness/bussiness.service";
import { RouterCommService } from "src/app/core/routing/routing.service";

@Component({
    selector: 'business-details',
    templateUrl: './business-details.component.html',
    styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent {
    business;
    showLoader = true;

    constructor(private businessService: BusinessService,
                private activeRoute: ActivatedRoute,
                private routerCommService: RouterCommService,
                private router: Router) {
        this.routerCommService.goBackSubject.subscribe(_ => {
            //TODO refactor route to go back 1 level
            this.router.navigate(['../..'], {relativeTo: this.activeRoute})
        });
    }

    async ngOnInit() {
        await this.businessService.getBusinessData(this.activeRoute.snapshot.params.id).then(async (data) => {
            this.business = data;
            console.log(data)
            //this.legalStatusList = this.currentOrgType.legalStatusList.map(_ => _).concat(this.business.legalStatusList.map(_ => _));
            this.showLoader = false;
        });
    }
}