# vertical-search-be
This backend API is used as an interface for search UI interaction with backend. 

## Steps to run & deploy

### Initial setup
For local environment setup for first time, please copy information from file .env.example to .env and run following command: 

   docker-compose up -d

that will setup postgres and PGAdmin 4 for initial setup.

After that, run all migrations: 

    migrations:run

After migrations are completed as an aditional step you can copy information inside ./tests/dummy-data.json and create a file under ./src/data/ with the name seed_data.json. It contains the information for demo/testing purposes. 



### Running in dev
For running your server in dev environment please use the following command: 

    npm run dev
 If everything is correct you will receive following message in console: 
 

    Server listening on port 3000
port 3000 is the default port and it is not yet configurable.

### Running in Production
For running your server in dev environment please use the following command: 

    npm run start
 If everything is correct you will receive following message in console: 
 

    Server listening on port 3000
port 3000 is the default port and it is not yet configurable.

## Business Logic


## Endpoints

## To Do



