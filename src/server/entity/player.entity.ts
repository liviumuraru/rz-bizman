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

    @Column({
        length: 256,
        type: "varchar",
        name: "sessionSourceId",
        nullable: true
    })
    sessionSourceId: string;

    @OneToMany(() => Character, character => character.player, {cascade: true})
    characters: Character[];
}