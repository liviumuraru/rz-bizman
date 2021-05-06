import { ENTER, COMMA } from "@angular/cdk/keycodes";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatAutocomplete, MatAutocompleteActivatedEvent, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
    character: any;
    separatorKeysCodes: number[] = [ENTER, COMMA];

    organisationNameFc = new FormControl('', [Validators.required]);
    organisationPurposeFc = new FormControl('', [Validators.required]);
    organisationLocationFc = new FormControl();
    organisationTypesFc = new FormControl('', [Validators.required]);
    addParticipantFc = new FormControl();
    totalSharesFc = new FormControl('100', [Validators.required, Validators.max(1000), this.ownerFlatSharesFcValidator]);
    formGroup = new FormGroup({
        name: this.organisationNameFc,
        location: this.organisationLocationFc,
        purpose: this.organisationPurposeFc,
        types: this.organisationTypesFc,
        participants: this.addParticipantFc,
        totalShares: this.totalSharesFc
    });

    displayedColumns: string[] = ['name', 'flatShares', 'percentageShares', 'actions'];

    @ViewChild('addParticipantInput') addParticipantInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    owners: any[];
    participants: any[] = [];
    filteredCharacters: Observable<any[]>;
    allCharacters: any[] = [];
    judgeRoleId: number;
    sharesFormGroup: FormGroup;

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
        await this.router.navigate(['../details', id.toString()], {relativeTo: this.route});
    }

    ownerFlatSharesFcValidator(control) {
        const intValue = Number.parseInt(control?.value);
        
        if (!/^[0-9]+$/g.test(control.value)) {
            return {
                invalid: true
            }
        }

        if (intValue <= 0) {
            return {
                negativeNonZero: true
            }
        }

        return null;
    }

    async ngOnInit() {
        this.orgTypes = await this.orgService.getOrgTypes();
        
        this.character = await this.playerService.getActiveCharacterData();
        this.judgeRoleId = await this.playerService.getJudgeRoleId();

        this.participants.push({
            participant: this.character,
            selectable: false,
            removable: false
        });

        const ownerCreatorFlatSharesFc = new FormControl(this.totalSharesFc.value, [Validators.required, this.ownerFlatSharesFcValidator]);

        this.owners = [{
            ...this.character,
            flatSharesFc: ownerCreatorFlatSharesFc,
            percentageShares: 1,
        }];

        this.sharesFormGroup = new FormGroup({
            [this.owners[0].id]: ownerCreatorFlatSharesFc
        }, [
            (groupControl) => {
                const values = Object.values(groupControl.value);
                if (values.length === 0) return null;

                const shareValues = values.reduce((prev: any, crt: any) => Number.parseInt(prev) + Number.parseInt(crt));
            
                if (shareValues != Number.parseInt(this.totalSharesFc.value)) {
                    return {
                        shares: true
                    }
                }
                return null;
            }
        ]);

        this.sharesFormGroup.valueChanges.subscribe(newVal => {
            for (const [key, value] of Object.entries(newVal)) {
                const ownerEntry = this.owners.find(owner => owner.id == key);
                
                const newPercentage = Number.parseFloat(value as string) / Number.parseFloat(this.totalSharesFc.value);
                ownerEntry.percentageShares = newPercentage;
            }
            this.owners = [...this.owners];
        })

        this.totalSharesFc.valueChanges.subscribe(_ => {
            this.sharesFormGroup.updateValueAndValidity();
        });

        this.allCharacters = await this.playerService.getAllCharacters();
        this.filteredCharacters = this.addParticipantFc.valueChanges.pipe(
            map((item) => item ? this._filter(item) : this.allCharacters));

        this.allCharacters.forEach(character => {
            if (character.id !== this.character.id && character.roles?.find(role => role.id === this.judgeRoleId)) {
                this.participants.push({
                    participant: character,
                    selectable: false,
                    removable: false
                });
            }
        });
        
        this.showLoader = false;
    }

    ngAfterViewInit() {
        this.addParticipantInput.nativeElement.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                return;
            }
        });

        this.addParticipantInput.nativeElement.addEventListener('keyup', event => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                return;
            }
        });

        this.addParticipantInput.nativeElement.addEventListener('keypress', event => {
            if (event.key === 'Escape') {
                event.stopPropagation();
                return;
            }
        });
    }

    getParticipantName(participant) {
        if (!participant?.participant) return 'UNDEFINED';

        let roleStr = '';
        let displayName = `${participant.participant.firstName} ${participant.participant.lastName} (${participant.participant.id})`
        
        if (participant.participant?.roles.find(role => role.id === this.judgeRoleId)) {
            roleStr = `Judge`
        }

        if (participant.participant.id === this.character.id) {
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

    getParticipantSelectName(participant) {
        if (!participant) return 'UNDEFINED';
        let displayName = `${participant.firstName} ${participant.lastName} (${participant.id})`;
        let roleStr = '';

        if (participant?.roles.find(role => role.id === this.judgeRoleId)) {
            roleStr = `Judge`
        }

        if (participant.id === this.character.id) {
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

        const ownerToRemove = this.owners.find(owner => owner.id === participantToRemove.participant.id);
        if (ownerToRemove) {
            this.removeOwnership(ownerToRemove);
        }

        if (idxToRemove >= 0) {
            this.participants.splice(idxToRemove, 1);
        }
    }

    async selectedAddParticipant(event: MatAutocompleteSelectedEvent) {
        const selectedParticipant = this.allCharacters.find(char => char.id === event.option.value);

        if (!selectedParticipant) return;
        if (this.participants.find(char => char.participant.id === event.option.value)) return;

        //TODO remove from possible participants array
        this.participants.push({
            participant: selectedParticipant,
            selectable: false,
            removable: selectedParticipant.roles?.find(role => role.id === this.judgeRoleId) ? false : true
        });

        this.addParticipantFc.setValue(null);
        this.addParticipantInput.nativeElement.value = '';
    }

    private _filter(value): string[] {
        const filterValue = value.toString().toLowerCase();
        return this.allCharacters.filter(char => char.firstName?.toLowerCase().indexOf(filterValue) === 0 ||
            char.lastName?.toLowerCase().indexOf(filterValue) === 0 ||
            char.id?.toString().indexOf(filterValue) === 0);
    }

    async submit() {
        //TODO length validations
        this.showLoader = true;

        if (!this.formGroup.valid || !this.sharesFormGroup.valid || !this.totalSharesFc.valid) {
            this.showLoader = false;
            return;
        }

        const payload = {
            name: this.organisationNameFc.value,
            location: this.organisationLocationFc.value || '',
            purpose: this.organisationPurposeFc.value,
            organisationTypes: this.organisationTypesFc.value,
            creatorCharId: this.character.id,
            participants: this.participants.map(participant => {
                const clone = Object.assign({}, participant.participant);
                delete clone.roles;
                return clone;
            }),
            owners: this.owners.map(owner => {
                const clone = Object.assign({}, owner);
                clone.flatShares = Number.parseInt(owner.flatSharesFc.value);
                delete clone.flatSharesFc;
                delete clone.percentageShares;
                delete clone.roles;
                return clone;
            }),
            totalShares: Number.parseInt(this.totalSharesFc.value)
        }

        const newRequest = await this.orgService.postOrgRequest(payload);
        await this.goToDetails(newRequest.id);
        this.showLoader = false;
    }

    addNewOwner(newOwner) {
        const newOwnerId = newOwner.value;
        if (this.owners.find(owner => owner.id === newOwnerId)) {
            return;
        };

        const asParticipant = this.participants.find(participant => participant.participant.id === newOwnerId).participant;
        
        if (!asParticipant) {
            return;
        };

        const newOwnerFlatSharesFc = new FormControl('1', [Validators.required, this.ownerFlatSharesFcValidator]);

        this.owners = this.owners.concat({
            ...asParticipant,
            flatSharesFc: newOwnerFlatSharesFc,
            percentageShares: 0,
        });
        this.sharesFormGroup.addControl(asParticipant.id.toString(), newOwnerFlatSharesFc);
    }

    removeOwnership(ownerToRemove) {
        const removeIdx = this.owners.findIndex(owner => owner.id === ownerToRemove.id);
        if (removeIdx >= 0) {
            this.owners.splice(removeIdx, 1);
            this.sharesFormGroup.removeControl(ownerToRemove.id.toString());
            this.owners = [...this.owners];
        }
    }
}