import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm";
import { Character } from "./character.entity";
import { Organisation } from "./organisation.entity";

@Entity({name: "roles"})
export class Role {
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

    @ManyToMany(type => Character, character => character.roles)
    characters: Character[];

    @ManyToMany(type => Organisation, org => org.roles)
    organisations: Organisation[];
}