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

## Business Logic

### Users
1. **Create Users**
    this will create a user with random username

### Posts
1. **Create Post**
    this will create a new post require fields are
    -username(the author of this post)
    -title
    -body

2. **Show all Posts**
    list all existing posts, we have following filtering suport
    -filter by username
    -filter by query used in title (search by title)

3. **Edit Posts**`TBD`

4. **Delete Posts**`TBD`

###Comments

1.**Show all comments(of a user)**

2.**show all comments(under a post)**

3..**add a comment**


