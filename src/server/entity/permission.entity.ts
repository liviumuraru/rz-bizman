import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "permissions"})
export class Permission {
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
}