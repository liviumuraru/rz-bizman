import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "players"})
export class Player {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @Column({
        length: 256,
        type: "varchar"
    })
    steamIdHex: string;
}