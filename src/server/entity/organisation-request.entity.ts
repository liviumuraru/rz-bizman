import { Character } from "./character.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { OrgType } from "./orgtype.entity";

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
        name: "location"
    })
    location: string;

    @Column({
        type: "bit",
        name: "approved"
    })
    approved: boolean;

    @JoinTable({
        name: "organisation_requests_types_map"
    })
    @ManyToMany(() => OrgType, orgType => orgType.organisationRequests)
    orgTypes: OrgType[];

    @ManyToOne(() => Character, char => char.organisationRequests)
    creator: Character;
}