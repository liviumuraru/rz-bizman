use rz_test;

create table if not exists players (
    id int auto_increment not null,
    steamIdHex varchar(256),
    primary key (id)
);

create table if not exists roles (
    id int auto_increment not null,
    description varchar(2048),
    name varchar(256),
    primary key (id)
);

create table if not exists permissions (
    id int auto_increment not null,
    description varchar(2048),
    name varchar(256),
    primary key (id)
);

create table if not exists characters (
    id int auto_increment not null,
    first_name varchar(256),
    last_name varchar(256),
    primary key (id)
);

create table if not exists role_permissions (
    roleId int not null,
    permissionId int not null,
    primary key (roleId, permissionId),
    foreign key fk_role_permissions_roles(roleId) references roles(id) on delete restrict on update cascade,
    foreign key fk_role_permissions_permissions(permissionId) references permissions(id) on delete restrict on update cascade
);

create table if not exists characters_roles (
    characterId int not null,
    roleId int not null,
    primary key (characterId, roleId),
    foreign key fk_characters_roles_characters(characterId) references characters(id) on delete cascade on update cascade,
    foreign key fk_characters_roles_roles(roleId) references roles(id) on delete cascade on update cascade
);

create table if not exists characters_additional_permissions (
    characterId int not null,
    permissionId int not null,
    primary key (characterId, permissionId),
    foreign key fk_characters_additional_permissions_characters(characterId) references characters(id) on delete cascade on update cascade,
    foreign key fk_characters_additional_permissions_permissions(permissionId) references permissions(id) on delete cascade on update cascade
);

create table organizations (
    id int auto_increment not null,
    description varchar(2048),
    primary key (id)
)