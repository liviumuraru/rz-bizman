import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { OrganisationService } from "src/app/core/organisation/organisation.service";
import { PlayerService } from "src/app/core/player/player.service";
import { RouterCommService } from "src/app/core/routing/routing.service";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
    selector: 'organisation-personal-request-details',
    templateUrl: './organisation-personal-request-details.component.html',
    styleUrls: ['./organisation-personal-request-details.component.scss']
})
export class OrganisationPersonalRequestDetailsComponent {
    showLoader = true;
    orgTypes: any[];
    details;
    character;
    disableFields = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    displayedColumns: string[] = ['name', 'flatShares', 'percentageShares'];

    organisationNameFc = new FormControl({ value: null, disabled: this.disableFields });
    organisationPurposeFc = new FormControl({ value: null, disabled: this.disableFields });
    organisationLocationFc = new FormControl({ value: null, disabled: this.disableFields });
    organisationTypesFc = new FormControl({ value: null, disabled: this.disableFields });
    addParticipantFc = new FormControl({ value: null, disabled: this.disableFields });
    totalSharesFc = new FormControl({value: null, disabled: this.disableFields});
    formGroup = new FormGroup({
        name: this.organisationNameFc,
        location: this.organisationLocationFc,
        purpose: this.organisationPurposeFc,
        types: this.organisationTypesFc,
        participants: this.addParticipantFc
    });

    @ViewChild('addParticipantInput') addParticipantInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    owners: any[] = [];
    participants: any[] = [];
    filteredCharacters: Observable<any[]>;
    allCharacters: any[] = [];
    judgeRoleId: number;
    pdfBytesString: string;
    safePdfUrl: SafeUrl;

    constructor(private orgService: OrganisationService,
        private routerCommService: RouterCommService,
        private router: Router,
        private route: ActivatedRoute,
        private playerService: PlayerService,
        private domSanitizer: DomSanitizer) {
        this.routerCommService.goBackSubject.subscribe(_ => {
            this.router.navigate(['../..'], { relativeTo: this.route });
        });
    }

    isJudge() {
        return this.character?.roles?.find(role => role.id === this.judgeRoleId) ? true : false;
    }

    isCreator() {
        return this.character?.id === this.details?.creator?.id;
    }

    showActions() {
        return this.isJudge() && !this.isCreator() && !this.details.approved && !this.details.denied;
    }

    async ngOnInit() {
        this.character = await this.playerService.getActiveCharacterData();
        this.details = await this.orgService.getOrgRequestData(this.route.snapshot.params.id, this.character.id);
        this.orgTypes = await this.orgService.getOrgTypes();
        this.judgeRoleId = await this.playerService.getJudgeRoleId();

        this.participants.push(
            ...this.details.participants
            .map(character => {
                let isRemovable = character.roles?.find(role => role.id === this.judgeRoleId) ? false : true;
                if (character.id === this.details.creator.id) isRemovable = false;
                return {
                    participant: character,
                    selectable: false,
                    removable: isRemovable
                }
            }));

        this.totalSharesFc.setValue(this.details.totalShares);
        this.owners = this.details.ownershipQuantums.map(itm => {
            return {
                ...itm.character,
                percentageShares: itm.flatShares / (this.details.totalShares),
                flatShares: itm.flatShares
            }
        });

        this.allCharacters = this.details.possibleParticipants;
        this.filteredCharacters = this.addParticipantFc.valueChanges.pipe(
            map((item) => item ? this._filter(item) : this.allCharacters));

        this.organisationTypesFc.setValue(this.details.orgTypes.map(type => type.id));
        this.organisationPurposeFc.setValue(this.details.businessPlan);
        this.organisationNameFc.setValue(this.details.name);
        this.organisationLocationFc.setValue(this.details.location);

        if (this.details.approved) {
            await this.createPdf();
        }

        this.showLoader = false;
    }

    ngAfterViewInit() {
        this.addParticipantInput.nativeElement.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                return false;
            }
        });

        this.addParticipantInput.nativeElement.addEventListener('keyup', event => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                return false;
            }
        });

        this.addParticipantInput.nativeElement.addEventListener('keypress', event => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                return;
            }
        });
    }

    async sendChatMessage(payload) {
        this.showLoader = true;
        const postedMsg = await this.orgService.postOrgRequestMessage(this.details.id, payload.message, this.character.id);
        (this.details.chat.messages as Array<any>).push({
            id: postedMsg.id,
            message: postedMsg.message,
            datetime: postedMsg.datetime,
            sender: postedMsg.sender
        });
        this.showLoader = false;
    }

    getParticipantName(participant) {
        if (!participant?.participant) return 'UNDEFINED';

        let roleStr = '';
        let displayName = `${participant.participant.firstName} ${participant.participant.lastName} (${participant.participant.id})`
        
        if (participant.participant?.roles.find(role => role.id === this.judgeRoleId)) {
            roleStr = `Judge`
        }

        if (participant.participant.id === this.details.creator.id) {
            if (roleStr) {
                roleStr = `${roleStr}, Owner`
            }
            else {
                roleStr = 'Owner'
            }
        }

        if (roleStr) {
            displayName = `${displayName} - ${roleStr}`
        }

        return displayName;
    }

    getParticipantSelectName(participant) {
        if (!participant) return 'UNDEFINED';
        let displayName = `${participant.firstName} ${participant.lastName} (${participant.id})`;
        let roleStr = '';

        if (participant?.roles.find(role => role.id === this.judgeRoleId)) {
            roleStr = `Judge`
        }

        if (participant.id === this.details.creator.id) {
            if (roleStr) {
                roleStr = `${roleStr}, Owner`
            }
            else {
                roleStr = 'Owner'
            }
        }

        if (roleStr) {
            displayName = `${displayName} - ${roleStr}`
        }

        return displayName;
    }

    getOwnerTableName(owner) {
        return `${owner.firstName} ${owner.lastName} (${owner.id})`;
    }

    async removeParticipant(participantToRemove) {
        //TODO add removed element to possible participants array
        let idxToRemove = -1;
        this.participants.find((participant, idx) => {
            if (participant.participant.id === participantToRemove.participant.id && participant.removable) {
                idxToRemove = idx;
                return true;
            }
            return false;
        });

        this.showLoader = true;
        await this.orgService.removeParticipantFromOrgRequest(participantToRemove.participant.id, this.character.id, this.details.id);

        if (idxToRemove >= 0) {
            this.participants.splice(idxToRemove, 1);
        }
        this.showLoader = false;
    }

    async selectedAddParticipant(event: MatAutocompleteSelectedEvent) {
        event.option.deselect();
        const selectedParticipant = this.allCharacters.find(char => char.id === event.option.value);

        if (!selectedParticipant) return;
        if (this.participants.find(char => char.participant.id === event.option.value)) return;

        this.showLoader = true;
        await this.orgService.addParticipantToOrgRequest(selectedParticipant.id, this.character.id, this.details.id);        

        //TODO remove from possible participants array
        this.participants.push({
            participant: selectedParticipant,
            selectable: false,
            //TODO disallow remove based on role
            removable: selectedParticipant.roles?.find(role => role.id === this.judgeRoleId) ? false : true
        });

        this.addParticipantInput.nativeElement.value = '';
        this.addParticipantFc.setValue(null);
        this.showLoader = false;
    }

    private _filter(value): string[] {
        const filterValue = value.toString().toLowerCase();
        return this.allCharacters.filter(char => char.firstName?.toLowerCase().indexOf(filterValue) === 0 ||
            char.lastName?.toLowerCase().indexOf(filterValue) === 0 ||
            char.id?.toString().indexOf(filterValue) === 0);
    }

    async approve() {
        this.showLoader = true;
        await this.orgService.approveOrganisationRequest(this.details.id, this.character.id);
        this.details.denied = false;
        this.details.approved = true;
        this.showLoader = false;
    }

    async deny() {
        this.showLoader = true;
        await this.orgService.denyOrganisationRequest(this.details.id, this.character.id);
        this.details.denied = true;
        this.details.approved = false;
        this.showLoader = false;
    }

    async removeSelfApplication() {
        this.showLoader = true;
        await this.orgService.denyOrganisationRequest(this.details.id, this.character.id);
        this.details.denied = true;
        this.details.approved = false;
        this.showLoader = false;
    }

    async createPdf() {
        const pdfDoc = await PDFDocument.create()
        const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
      
        const page = pdfDoc.addPage()
        const { width, height } = page.getSize()
        const fontSize = 10;
        const strObj = JSON.stringify(this.details);
        let chunks = [];

        for (let i = 0, charsLength = strObj.length; i < charsLength; i += 25) {
            chunks.push(strObj.substring(i, i + 25));
        }
        page.drawText(`${chunks.reduce((prev, crt) => `${prev}\n${crt}`)}`, {
          x: 20,
          y: height - 2 * fontSize,
          size: fontSize,
          font: timesRomanFont,
          color: rgb(0, 0.53, 0.71),
        })
      
        this.pdfBytesString = await pdfDoc.saveAsBase64();
        this.safePdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;filename=${this.details.name}.pdf;base64,${this.pdfBytesString}`)
      }
}