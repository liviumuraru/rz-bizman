import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Character } from "./character.entity";

@Entity({name: "players"})
export class Player {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @Column({
        length: 256,
        type: "varchar",
        name: "primaryFiveMId"
    })
    primaryFiveMId: string;

    @OneToMany(type => Character, character => character.player, {cascade: true})
    characters: Character[];
}