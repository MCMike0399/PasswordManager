use passmanager;
create table usuarios (
	correo varchar(200),
    nombre varchar(200),
    pass varchar(200),
    primary key (correo)
)
create table redes (
	redID int not null auto_increment,
    nombre varchar(200),
    pass varchar(200),
    correo varchar(200) not null,
    foreign key (correo) references usuarios(correo),
    primary key (redID)
)	