import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Character } from "./character.entity";
import { OrganisationRequestChat } from "./organisation-request-chat.entity";


@Entity({name: "organisation_request_chats_messages"})
export class OrganisationRequestChatMessage {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @Column({
        length: 2048,
        type: "varchar",
        name: "message"
    })
    message: string;

    @Column({
        type: "datetime",
        name: "datetime",
        nullable: false
    })
    datetime: Date;

    @ManyToOne(() => Character)
    sender: Character;

    @ManyToOne(() => OrganisationRequestChat, chat => chat.messages)
    chat: OrganisationRequestChat;
}