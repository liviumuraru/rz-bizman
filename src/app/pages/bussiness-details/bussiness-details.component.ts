import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BussinessService } from "src/app/core/bussiness/bussiness.service";

@Component({
    selector: 'bussiness-details',
    templateUrl: './bussiness-details.component.html',
    styleUrls: ['./bussiness-details.component.scss']
})
export class BussinessDetailsComponent {
    bussiness;

    constructor(private bussinessService: BussinessService, private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.bussinessService.getBussinessData(this.activeRoute.snapshot.params.id).toPromise().then((data) => {
            this.bussiness = data;
        });
    }
}