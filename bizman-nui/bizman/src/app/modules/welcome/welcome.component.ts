import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PlayerService } from "src/app/core/player/player.service";

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    showLoader = true;
    characterData: any;
    characters: any[] = [];
    selectedCharId: number;
    player: any;

    constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) {
    }

    async ngOnInit() {
        //TODO get active character
        this.player = await this.playerService.getPlayerData();
        this.characters = this.player.characters;
        await this.changeCharacter(this.characters[0].id);
        this.showLoader = false;
    }

    async changeCharacter(characterId) {
        this.characterData = this.playerService.changeActiveCharacter(characterId);
        this.selectedCharId = this.characterData.id;
    }

    async goToCheckLicenseApplications() {
        await this.router.navigate(['organisation/requests', 'management']);
    }

    getCharacterDisplayName(character) {
        return `${character.firstName} ${character.lastName} (${character.id})`
    }

    async onChangeCharacterEvent(characterChangeEvent) {
        this.showLoader = true;
        await this.changeCharacter(characterChangeEvent.value);
        this.showLoader = false;
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