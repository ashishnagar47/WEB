#Social Media Sample Project

## Database Setup

```shell
$mysql -u root
```

```mysql
create database cbsocialmediadb;

create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';

grant all privileges on cbsocialmediadb.* to cbsocialuser;

flush privileges;
```

## Project Structure
```shell
src
├───controllers         #functions to connnect routes to db operations
├───db                  #db connection and model definintion
├───public              #html/css/js file for static part of site
└───routes              #express middleware (route wise)
```


