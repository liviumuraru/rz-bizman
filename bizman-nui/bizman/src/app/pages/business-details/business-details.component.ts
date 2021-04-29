import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BusinessService } from "src/app/core/bussiness/bussiness.service";

@Component({
    selector: 'business-details',
    templateUrl: './business-details.component.html',
    styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent {
    business;
    orgTypes: any[];
    businessOrgTypeId: string | number;
    currentOrgType;
    showLoader = true;
    legalStatusList: any[];

    constructor(private businessService: BusinessService,
                private activeRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.businessService.getBusinessData(this.activeRoute.snapshot.params.id).toPromise().then(async (data) => {
            this.business = data;
            await this.businessService.getOrgTypes().toPromise().then((data) => {
                this.orgTypes = data;
                this.businessOrgTypeId = this.business.orgTypeId;
                this.currentOrgType = this.orgTypes.find(orgType => orgType.id === this.businessOrgTypeId);
            });

            this.legalStatusList = this.currentOrgType.legalStatusList.map(_ => _).concat(this.business.legalStatusList.map(_ => _));

            this.showLoader = false;
        });
    }
}