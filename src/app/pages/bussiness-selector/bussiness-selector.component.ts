import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BussinessService } from "src/app/core/bussiness/bussiness.service";

@Component({
    selector: 'bussiness-selector',
    templateUrl: './bussiness-selector.component.html',
    styleUrls: ['./bussiness-selector.component.scss']
})
export class BussinessSelectorComponent {
    bussinesses;

    constructor(private bussinessService: BussinessService, private router: Router) {
        this.bussinessService.getBussinesses().subscribe((data) => {
            this.bussinesses = data;
        });
    }

    async goToDetails(id: string | number) {
        await this.router.navigate(['details', id.toString()]);
    }
}