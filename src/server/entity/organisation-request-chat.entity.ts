import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from "typeorm";
import { OrganisationRequestChatMessage } from "./organisation-request-message.entity";
import { OrganisationRequest } from "./organisation-request.entity";

@Entity({name: "organisation_request_chats"})
export class OrganisationRequestChat {
    @PrimaryGeneratedColumn({
        name: "id",
        type: "int"
    })
    id: number;

    @OneToOne(() => OrganisationRequest, orgReq => orgReq.chat)
    organisationRequest: OrganisationRequest;

    @OneToMany(() => OrganisationRequestChatMessage, orgReqChatMessage => orgReqChatMessage.chat)
    messages: OrganisationRequestChatMessage[];
}