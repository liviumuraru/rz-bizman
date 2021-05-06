create table rz_test.organisation_request_chats
(
    id int auto_increment
        primary key
);

create table rz_test.organisations
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null,
    subtitle    varchar(256)  not null,
    image       varchar(2048) null
);

create table rz_test.orgtypes
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null
);

create table rz_test.organisations_types_map
(
    organisationsId int not null,
    orgtypesId      int not null,
    primary key (organisationsId, orgtypesId),
    constraint FK_9fa526d8c9e31b9279948486e72
        foreign key (organisationsId) references rz_test.organisations (id)
            on delete cascade,
    constraint FK_ac634fc578f47ee86d648fb8253
        foreign key (orgtypesId) references rz_test.orgtypes (id)
            on delete cascade
);

create index IDX_9fa526d8c9e31b9279948486e7
    on rz_test.organisations_types_map (organisationsId);

create index IDX_ac634fc578f47ee86d648fb825
    on rz_test.organisations_types_map (orgtypesId);

create table rz_test.permissions
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null
);

create table rz_test.players
(
    id              int auto_increment
        primary key,
    primaryFiveMId  varchar(256) not null,
    sessionSourceId varchar(256) null
);

create table rz_test.characters
(
    id         int auto_increment
        primary key,
    first_name varchar(256) not null,
    last_name  varchar(256) not null,
    playerId   int          null,
    constraint FK_ef6833be0a5b4442e6c09542825
        foreign key (playerId) references rz_test.players (id)
);

create table rz_test.characters_organisations
(
    charactersId    int not null,
    organisationsId int not null,
    primary key (charactersId, organisationsId),
    constraint FK_0bfbe23b87f1c53ea98344e7581
        foreign key (organisationsId) references rz_test.organisations (id)
            on delete cascade,
    constraint FK_a875738f22c2bce6a18bccb773b
        foreign key (charactersId) references rz_test.characters (id)
            on delete cascade
);

create index IDX_0bfbe23b87f1c53ea98344e758
    on rz_test.characters_organisations (organisationsId);

create index IDX_a875738f22c2bce6a18bccb773
    on rz_test.characters_organisations (charactersId);

create table rz_test.organisation_request_chats_messages
(
    id       int auto_increment
        primary key,
    message  varchar(2048) not null,
    senderId int           null,
    chatId   int           null,
    datetime datetime      not null,
    constraint FK_8eb49e1ecc62ee71368f0e737b4
        foreign key (senderId) references rz_test.characters (id),
    constraint FK_d0451480836b40b189fa8790a50
        foreign key (chatId) references rz_test.organisation_request_chats (id)
);

create table rz_test.organisation_requests
(
    id            int auto_increment
        primary key,
    business_plan varchar(4096)            not null,
    name          varchar(256)             not null,
    location      varchar(256) default ''  null,
    creatorId     int                      null,
    chatId        int                      not null,
    approved      tinyint      default 0   not null,
    total_shares  int          default 100 not null,
    denied        tinyint      default 0   not null,
    constraint REL_c00606a2fc9206e1d57e45d7b6
        unique (chatId),
    constraint FK_c00606a2fc9206e1d57e45d7b62
        foreign key (chatId) references rz_test.organisation_request_chats (id),
    constraint FK_db40841fbc05e4e97e1847a8029
        foreign key (creatorId) references rz_test.characters (id)
);

create table rz_test.organisation_requests_ownership_quantums
(
    id          int auto_increment
        primary key,
    flat_shares int not null,
    characterId int null,
    requestId   int null,
    constraint FK_192b1cfdde6e7a5392458807dea
        foreign key (characterId) references rz_test.characters (id),
    constraint FK_df5b2428faed7cac1934ddc9d32
        foreign key (requestId) references rz_test.organisation_requests (id)
);

create table rz_test.organisation_requests_participants
(
    organisationRequestsId int not null,
    charactersId           int not null,
    primary key (organisationRequestsId, charactersId),
    constraint FK_361c5efe94db54838691e22695d
        foreign key (charactersId) references rz_test.characters (id)
            on delete cascade,
    constraint FK_79d8802b38c8de1c2ddf9e84398
        foreign key (organisationRequestsId) references rz_test.organisation_requests (id)
            on delete cascade
);

create index IDX_361c5efe94db54838691e22695
    on rz_test.organisation_requests_participants (charactersId);

create index IDX_79d8802b38c8de1c2ddf9e8439
    on rz_test.organisation_requests_participants (organisationRequestsId);

create table rz_test.organisation_requests_types_map
(
    organisationRequestsId int not null,
    orgtypesId             int not null,
    primary key (organisationRequestsId, orgtypesId),
    constraint FK_108cf8fe9e0c1cf3d002df7cfa0
        foreign key (organisationRequestsId) references rz_test.organisation_requests (id)
            on delete cascade,
    constraint FK_9f7e71add4a2383754fcdd97108
        foreign key (orgtypesId) references rz_test.orgtypes (id)
            on delete cascade
);

create index IDX_108cf8fe9e0c1cf3d002df7cfa
    on rz_test.organisation_requests_types_map (organisationRequestsId);

create index IDX_9f7e71add4a2383754fcdd9710
    on rz_test.organisation_requests_types_map (orgtypesId);

create table rz_test.roles
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null
);

create table rz_test.characters_roles
(
    charactersId int not null,
    rolesId      int not null,
    primary key (charactersId, rolesId),
    constraint FK_7a9481476c9a9f28b29a13804f1
        foreign key (rolesId) references rz_test.roles (id)
            on delete cascade,
    constraint FK_eb39b7082cb51a75ac5acd44a76
        foreign key (charactersId) references rz_test.characters (id)
            on delete cascade
);

create index IDX_7a9481476c9a9f28b29a13804f
    on rz_test.characters_roles (rolesId);

create index IDX_eb39b7082cb51a75ac5acd44a7
    on rz_test.characters_roles (charactersId);

create table rz_test.organisations_roles
(
    organisationsId int not null,
    rolesId         int not null,
    primary key (organisationsId, rolesId),
    constraint FK_5084d2f34fd0190b784d5fd39d2
        foreign key (rolesId) references rz_test.roles (id)
            on delete cascade,
    constraint FK_cb11e4f1e4c81917f4412f11f09
        foreign key (organisationsId) references rz_test.organisations (id)
            on delete cascade
);

create index IDX_5084d2f34fd0190b784d5fd39d
    on rz_test.organisations_roles (rolesId);

create index IDX_cb11e4f1e4c81917f4412f11f0
    on rz_test.organisations_roles (organisationsId);

