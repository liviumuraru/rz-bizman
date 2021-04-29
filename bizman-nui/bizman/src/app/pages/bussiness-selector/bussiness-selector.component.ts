import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BusinessService } from "src/app/core/bussiness/bussiness.service";

@Component({
    selector: 'bussiness-selector',
    templateUrl: './bussiness-selector.component.html',
    styleUrls: ['./bussiness-selector.component.scss']
})
export class BussinessSelectorComponent {
    businesses;

    constructor(private businessService: BusinessService, private router: Router) {
        this.businessService.getBusinesses().toPromise().then(async (businesses) => {
            const orgTypes = await this.businessService.getOrgTypes().toPromise();
            this.businesses = businesses.map(business => {
                const currentOrgType = orgTypes.find(orgType => orgType.id === business.orgTypeId);
            
                return {
                    ...business,
                    legalStatusList: currentOrgType.legalStatusList.concat(business?.legalStatusList),
                }
            });
        });
    }

    async goToDetails(id: string | number) {
        await this.router.navigate(['details', id.toString()]);
    }
}