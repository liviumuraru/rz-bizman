import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Character } from "./character.entity";
import { OrgType } from "./orgtype.entity";
import { Role } from "./role.entity";

@Entity({name: "organisations"})
export class Organisation {
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

    @Column({
        length: 256,
        type: "varchar",
        name: "subtitle"
    })
    subtitle: string;

    @Column({
        type: "varchar",
        length: '2048',
        name: "image",
        nullable: true
    })
    image: string;

    @JoinTable({
        name: "organisations_types_map"
    })
    @ManyToMany(() => OrgType, orgType => orgType.organisations)
    orgTypes: OrgType[];

    @ManyToMany(() => Character, character => character.organisations)
    characters: Character[];

    @JoinTable({
        name: "organisations_roles"
    })
    @ManyToMany(() => Role, role => role.organisations)
    roles: Role[];
}