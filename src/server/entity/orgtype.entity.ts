import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrganisationRequest } from "./organisation-request.entity";
import { Organisation } from "./organisation.entity";

@Entity({name: "orgtypes"})
export class OrgType {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @Column({
        length: 2048,
        type: "varchar",
        name: "description"
    })
    description: string;

    @Column({
        length: 256,
        type: "varchar",
        name: "name"
    })
    name: string;

    @ManyToMany(type => Organisation, org => org.orgTypes)
    organisations: Organisation[];

    @ManyToMany(type => OrganisationRequest, orgReq => orgReq.orgTypes)
    organisationRequests: OrganisationRequest[];
}