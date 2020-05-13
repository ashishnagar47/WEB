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
### Backend(server)
```shell
src
├───controllers         #functions to connnect routes to db operations
├───db                  #db connection and model definintion
├───public              #html/css/js file for static part of site
└───routes              #express middleware (route wise)
```

### Frontend (Client Side Code)
```shell
src/public
├── app                                     # our own frontend js code
│   └── common.js
├── components                              # own own html snippets
│   └── navbar.html
├── css                                     # css libraries we are using
│   └── bootstrap.css
├── fonts                                   # fonts that we are using
│   ├── Muli-Italic.woff2
│   ├── Muli.woff2
│   └── muli.css
├── index.html                              # first / home page
└── js                                      # js libraries we are using
    ├── bootstrap.js
    ├── jquery-3.4.1.js
    └── popper.js
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

3.**add a comment**

## API Documentation

### `Users`

1. `POST / users`
Creates a new user with username and userid

2. `GET / users{userid}`
Get an user with a given userid

3. `GET / users{username}`
Get an user with a given username

###`Posts`

1. `POST / posts`
Create a new post

2. `GET / posts`
Get all posts by everyone
Required fields in body
```
userId=
title=
body
```