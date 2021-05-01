import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BusinessService } from "src/app/core/bussiness/bussiness.service";
import { RouterCommService } from "src/app/core/routing/routing.service";

@Component({
    selector: 'business-list',
    templateUrl: './business-list.component.html',
    styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent {
    businesses = [];
    showLoader = true;

    constructor(private businessService: BusinessService, private routerCommService: RouterCommService, private router: Router, private route: ActivatedRoute) {
        this.routerCommService.goBackSubject.subscribe(_ => {
            this.routerCommService.goHome();
        });
    }

    async goToDetails(id: string | number) {
        await this.router.navigate(['details', id.toString()], {relativeTo: this.route});
    }

    ngOnInit() {
        this.businessService.getBusinesses().then(async (businesses) => {
            console.log(businesses)
            this.businesses = businesses.map(org => {
                return {
                    ...org,
                    legalStatusList: org.orgTypes.map(orgType => orgType.description)
                }
            });
            this.showLoader = false;
        });
    }

    _arrayBufferToBase64( buffer: ArrayBuffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }
}