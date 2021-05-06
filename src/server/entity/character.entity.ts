import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { OrganisationRequestOwnershipQuantum } from "./organisation-request-ownership-quantum.entity";
import { OrganisationRequest } from "./organisation-request.entity";
import { Organisation } from "./organisation.entity";
import { Player } from "./player.entity";
import { Role } from "./role.entity";

@Entity({name: "characters"})
export class Character {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @Column({
        length: 256,
        type: "varchar",
        name: "first_name"
    })
    firstName: string;

    @Column({
        length: 256,
        type: "varchar",
        name: "last_name"
    })
    lastName: string;

    @ManyToOne(type => Player, player => player.characters)
    player: Player;

    @JoinTable({
        name: "characters_roles"
    })
    @ManyToMany(type => Role, role => role.characters)
    roles: Role[];

    @JoinTable({
        name: "characters_organisations"
    })
    @ManyToMany(() => Organisation, org => org.characters)
    organisations: Organisation[];

    @OneToMany(() => OrganisationRequest, orgReq => orgReq.creator)
    organisationRequests: OrganisationRequest[];

    @ManyToMany(() => Organisation, org => org.characters)
    organisationRequestsAsParticipant: OrganisationRequest[];

    @OneToMany(() => OrganisationRequestOwnershipQuantum, orgReqOQ => orgReqOQ.character)
    organisationRequestOwnershipQuantum: OrganisationRequestOwnershipQuantum[];
}