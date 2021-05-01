import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CharacterService } from "src/app/core/character/character.service";
import { OrganisationService } from "src/app/core/organisation/organisation.service";
import { PlayerService } from "src/app/core/player/player.service";
import { RouterCommService } from "src/app/core/routing/routing.service";

@Component({
    selector: 'organisation-personal-request-new',
    templateUrl: './organisation-personal-request-new.component.html',
    styleUrls: ['./organisation-personal-request-new.component.scss']
})
export class OrganisationPersonalRequestNewComponent {
    requests = [];
    showLoader = true;
    orgTypes: any[];

    organisationNameFc = new FormControl('', [Validators.required]);
    organisationPurposeFc = new FormControl('', [Validators.required]);
    organisationLocationFc = new FormControl();
    organisationTypesFc = new FormControl(null, [Validators.required]);
    formGroup = new FormGroup({
        name: this.organisationNameFc,
        location: this.organisationLocationFc,
        purpose: this.organisationPurposeFc,
        types: this.organisationTypesFc
    });

    constructor(private orgService: OrganisationService,
                private routerCommService: RouterCommService,
                private router: Router,
                private route: ActivatedRoute,
                private playerService: PlayerService) {
        this.routerCommService.goBackSubject.subscribe(_ => {
            this.router.navigate(['welcome']);
        });
    }

    async goToDetails(id: string | number) {
        //TODO
        await this.router.navigate(['../details', id.toString()], {relativeTo: this.route});
    }

    async ngOnInit() {
        this.orgTypes = await this.orgService.getOrgTypes();
        this.organisationTypesFc.setValue([this.orgTypes[0].id]);
        this.showLoader = false;
    }

    async submit() {
        //TODO length validations
        this.showLoader = true;
        if (!this.formGroup.valid) {
            return;
        }

        const player = await this.playerService.getPlayerData();

        const payload = {
            name: this.organisationNameFc.value,
            location: this.organisationLocationFc.value,
            purpose: this.organisationPurposeFc.value,
            organisationTypes: this.organisationTypesFc.value,
            //TODO active character
            creatorCharId: player.characters[0].id
        }

        const newRequest = await this.orgService.postOrgRequest(payload);
        console.log(newRequest);
        //await this.goToDetails(newRequest.id);
        await this.router.navigate(['..'], {relativeTo: this.route});
        this.showLoader = false;
    }
}