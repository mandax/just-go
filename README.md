# Just Go

Just Go is a platform to manage restaurants. Right now the project just have the start architecture, and the Menu Dishes CRUD.

## Repo

This project uses a Monorepo structure which is managed with Lerna.js. Each part of the project is a different package:

- server - Rest Api Server
- api - Typescript interface with server
- ui - React + Typescript Ui Components
- manager-pos - Restaurant Manager and Point of Sale app

## Dependencies

- Ruby 2.5.6
- Rails 6
- Postgresql 10+
- Nodejs 10.x+

## Running

Each package has your own running pipeline, but with Lerna it's possible to execute all at once. You don't need to install lerna globally, but as we're using `npx` maybe npm can try to install it for each time you run some command, because of this I recoomend you ro install lerna globally:

    npm install lerna -g

### Install dependencies

Assuming that all the project dependencies are installed, this command will install and configure all package dependencies, also Lerna will link the local packages.

    npm run bootstrap

You can also run separately, if you want:

    # for frontend dependencies
    npm run bootstrap:front 
    
    # for rails bundler
    npm run bootrstrap:server
    
    # to purge, migrate and seed the database
    npm run bootstrap:db

### Start developing

To run the project and start developing, just type:

    npm start

## TODO

- [ ]  add API URL to environment var
- [ ]  add select input component
- [ ]  add form validation
- [ ]  create new dish
- [ ]  add unit tests for ui components
- [ ]  add search bar on dishes
- [ ]  user authentication - server
- [ ]  add login page
- [ ]  add sign in page