create table organisation_requests
(
    id            int auto_increment
        primary key,
    business_plan varchar(4096) not null,
    name          varchar(256)  not null,
    location      varchar(256)  not null,
    approved      bit           not null
);

create table organisations
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null,
    subtitle    varchar(256)  not null,
    image       varchar(2048) null
);

create table orgtypes
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null
);

create table organisation_requests_types_map
(
    organisationRequestsId int not null,
    orgtypesId             int not null,
    primary key (organisationRequestsId, orgtypesId),
    constraint FK_108cf8fe9e0c1cf3d002df7cfa0
        foreign key (organisationRequestsId) references organisation_requests (id)
            on delete cascade,
    constraint FK_9f7e71add4a2383754fcdd97108
        foreign key (orgtypesId) references orgtypes (id)
            on delete cascade
);

create index IDX_108cf8fe9e0c1cf3d002df7cfa
    on organisation_requests_types_map (organisationRequestsId);

create index IDX_9f7e71add4a2383754fcdd9710
    on organisation_requests_types_map (orgtypesId);

create table organisations_types_map
(
    organisationsId int not null,
    orgtypesId      int not null,
    primary key (organisationsId, orgtypesId),
    constraint FK_9fa526d8c9e31b9279948486e72
        foreign key (organisationsId) references organisations (id)
            on delete cascade,
    constraint FK_ac634fc578f47ee86d648fb8253
        foreign key (orgtypesId) references orgtypes (id)
            on delete cascade
);

create index IDX_9fa526d8c9e31b9279948486e7
    on organisations_types_map (organisationsId);

create index IDX_ac634fc578f47ee86d648fb825
    on organisations_types_map (orgtypesId);

create table permissions
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null
);

create table players
(
    id             int auto_increment
        primary key,
    primaryFiveMId varchar(256) not null
);

create table characters
(
    id         int auto_increment
        primary key,
    first_name varchar(256) not null,
    last_name  varchar(256) not null,
    playerId   int          null,
    constraint FK_ef6833be0a5b4442e6c09542825
        foreign key (playerId) references players (id)
);

create table characters_organisations
(
    charactersId    int not null,
    organisationsId int not null,
    primary key (charactersId, organisationsId),
    constraint FK_0bfbe23b87f1c53ea98344e7581
        foreign key (organisationsId) references organisations (id)
            on delete cascade,
    constraint FK_a875738f22c2bce6a18bccb773b
        foreign key (charactersId) references characters (id)
            on delete cascade
);

create index IDX_0bfbe23b87f1c53ea98344e758
    on characters_organisations (organisationsId);

create index IDX_a875738f22c2bce6a18bccb773
    on characters_organisations (charactersId);

create table roles
(
    id          int auto_increment
        primary key,
    description varchar(2048) not null,
    name        varchar(256)  not null
);

create table characters_roles
(
    charactersId int not null,
    rolesId      int not null,
    primary key (charactersId, rolesId),
    constraint FK_7a9481476c9a9f28b29a13804f1
        foreign key (rolesId) references roles (id)
            on delete cascade,
    constraint FK_eb39b7082cb51a75ac5acd44a76
        foreign key (charactersId) references characters (id)
            on delete cascade
);

create index IDX_7a9481476c9a9f28b29a13804f
    on characters_roles (rolesId);

create index IDX_eb39b7082cb51a75ac5acd44a7
    on characters_roles (charactersId);

create table organisations_roles
(
    organisationsId int not null,
    rolesId         int not null,
    primary key (organisationsId, rolesId),
    constraint FK_5084d2f34fd0190b784d5fd39d2
        foreign key (rolesId) references roles (id)
            on delete cascade,
    constraint FK_cb11e4f1e4c81917f4412f11f09
        foreign key (organisationsId) references organisations (id)
            on delete cascade
);

create index IDX_5084d2f34fd0190b784d5fd39d
    on organisations_roles (rolesId);

create index IDX_cb11e4f1e4c81917f4412f11f0
    on organisations_roles (organisationsId);

