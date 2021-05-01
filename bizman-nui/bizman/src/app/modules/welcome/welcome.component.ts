import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CharacterService } from "src/app/core/character/character.service";

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    showLoader = true;
    characterData: any;
    currentCharId = 4;

    constructor(private characterService: CharacterService, private router: Router, private route: ActivatedRoute) {
    }

    async ngOnInit() {
        //TODO get active character
        this.characterData = (await this.characterService.getCharacterData(this.currentCharId))[0];
        this.showLoader = false;
    }

    async goToCheckLicenseApplications() {

    }

    async goToCheckLawsuits () {

    }

    async goToSelfOrganisations () {
        await this.router.navigate(['business']);
    }

    async goToSelfOrganisationApplications() {
        await this.router.navigate(['organisation/requests']);
    }

    async goToSelfLawsuits() {

    }

    async goToSelfInformation() {

    }
}