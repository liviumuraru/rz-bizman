import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Character } from "./character.entity";
import { OrganisationRequest } from "./organisation-request.entity";
import { OrgType } from "./orgtype.entity";
import { Role } from "./role.entity";

@Entity({name: "organisation_requests_ownership_quantums"})
export class OrganisationRequestOwnershipQuantum {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @ManyToOne(() => Character, character => character.organisationRequestOwnershipQuantum)
    character: Character;

    @ManyToOne(() => OrganisationRequest, orgReq => orgReq)
    request: OrganisationRequest;

    @Column({
        name: 'flat_shares',
        type: 'int',
        nullable: false
    })
    flatShares: number;
}