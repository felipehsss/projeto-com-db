create database projeto_com_db_rodrigo;

use projeto_com_db_rodrigo;

# Tabela tarefas
create table tarefas(
id int primary key,
titulo varchar(100),
descricao text ,
status varchar(50)
);

# Valores Tarefas
insert into tarefas (id, titulo,descricao,status)
values  (1,'lavar carro', 'pegar sabao,esponja e pano','pendente'),
		(2,'lavar quintal', 'pegar sabao','concluido'),
		(3,'compra roupas', 'passar no shopping','concluido'),
		(4,'pegar a chave do carro', 'deixei em casa','pendente'),
		(5,'lavar moto', 'pegar sabao,esponja e pano','pendente');
        
        
# Select
select * from tarefas;

alter table tarefas
modify id int auto_increment ;

alter table tarefas drop primary key ;
alter table tarefas drop column id;
alter table tarefas add id int not null auto_increment primary key;

describe tarefas;