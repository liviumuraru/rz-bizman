import { Character } from "./character.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { OrgType } from "./orgtype.entity";
import { OrganisationRequestChat } from "./organisation-request-chat.entity";
import { OrganisationRequestOwnershipQuantum } from "./organisation-request-ownership-quantum.entity";

@Entity({name: "organisation_requests"})
export class OrganisationRequest {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @Column({
        length: 4096,
        type: "varchar",
        name: "business_plan"
    })
    businessPlan: string;

    @Column({
        length: 256,
        type: "varchar",
        name: "name"
    })
    name: string;

    @Column({
        length: 256,
        type: "varchar",
        name: "location",
        nullable: true,
        default: ''
    })
    location: string;

    @Column({
        type: "boolean",
        name: "approved",
        default: false
    })
    approved: boolean;

    @Column({
        type: "boolean",
        name: "denied",
        default: false
    })
    denied: boolean;

    @Column({
        type: "int",
        name: "total_shares",
        nullable: false,
        default: 100
    })
    totalShares: number;

    @JoinTable({
        name: "organisation_requests_types_map"
    })
    @ManyToMany(() => OrgType, orgType => orgType.organisationRequests)
    orgTypes: OrgType[];

    @ManyToOne(() => Character, char => char.organisationRequests)
    creator: Character;

    @JoinTable({
        name: "organisation_requests_participants"
    })
    @ManyToMany(() => Character, char => char.organisationRequestsAsParticipant)
    participants: Character[];

    @JoinColumn()
    @OneToOne(() => OrganisationRequestChat, orgReqChat => orgReqChat.organisationRequest, {
        nullable: false,
        cascade: ['insert', 'update']
    })
    chat: OrganisationRequestChat;

    @OneToMany(() => OrganisationRequestOwnershipQuantum, orgReqOQ => orgReqOQ.request, {
        cascade: ['insert', 'update']
    })
    ownershipQuantums: OrganisationRequestOwnershipQuantum[];
}