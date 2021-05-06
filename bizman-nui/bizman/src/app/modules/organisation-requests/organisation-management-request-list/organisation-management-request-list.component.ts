import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OrganisationService } from "src/app/core/organisation/organisation.service";
import { PlayerService } from "src/app/core/player/player.service";
import { RouterCommService } from "src/app/core/routing/routing.service";

@Component({
    selector: 'organisation-management-request-list',
    templateUrl: './organisation-management-request-list.component.html',
    styleUrls: ['./organisation-management-request-list.component.scss']
})
export class OrganisationManagementRequestListComponent {
    requests = [];
    showLoader = true;

    constructor(private orgService: OrganisationService,
                private routerCommService: RouterCommService,
                private playerService: PlayerService,
                private router: Router,
                private route: ActivatedRoute) {
        this.routerCommService.goBackSubject.subscribe(_ => {
            //this.router.navigate(['..'], {relativeTo: this.route});
            this.routerCommService.goHome();
        });
    }

    async goToDetails(id: string | number) {
        //TODO
        await this.router.navigate(['../details', id.toString()], {relativeTo: this.route});
    }

    async goToNewRequest() {
        await this.router.navigate(['create'], {relativeTo: this.route});
    }

    async ngOnInit() {
        const character = await this.playerService.getActiveCharacterData();
        //TODO current character
        this.requests = await this.orgService.getOrgRequestsAsManager(character.id);
        this.showLoader = false;
    }
}