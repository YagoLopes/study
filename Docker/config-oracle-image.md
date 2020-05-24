### Faça login no docker

- docker login

### Faça o download da imagem do oracle

- docker pull store/oracle/database-enterprise:12.2.0.1

### Inicie o container

- docker run -d -p 1521:1521 --name oracle store/oracle/database-enterprise:12.2.0.1

### CONECTA DENTRO DO CONTAINER

- docker exec -it id_container bash -c "source /home/oracle/.bashrc; sqlplus /nolog"

### ALTERA PARA O USUARIO SYSDBA

- connect sys as sysdba;
- senha Oradoc_db1

### ALTERA SESSION

- TIRE O / DO COMANDO ABAIXO

- alter session set "\_ORACLE_SCRIPT"=true;

### CRIA UM USUÁRIO E UMA SENHA

- create user docker identified by docker;

### GARANTE OS PRIVILEGIOS DO USUÁRIO

- GRANT ALL PRIVILEGES TO docker;

### Default database para conexão

- ORCLCDB.localdomain
