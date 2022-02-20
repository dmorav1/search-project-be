
# search-project-be

This backend API is used as an interface for search UI interaction with backend. Please be aware this project was developed just with educational purposes, there are things that must be done for working on real production environment. 

This API retrieves information from a SQL database with objects which have following structure: title, photo, description, short description.

This is an ongoing project and could have errors, if you want to test it, there is a versioned deployed at https://search-project-be.herokuapp.com/

 
## Steps to run & deploy

  

### Initial setup

For local environment setup for first time, please copy information from file .env.example to .env and run following command:

  

    `docker-compose up -d`

  

That will set up Postgres and PGAdmin 4 for initial setup. After that, run all migrations:

  

    npm run migrations:run

  

After migrations are completed, as an additional step you can copy information inside [./tests/dummy-data.json](./tests/dummy-data.json) and create a file under [./src/data/](./src/data) with the name `seed_data.json`. It contains the information for demo/testing purposes.

  
  
  

### Running in dev

For running your server in your local dev environment, please use the following command:

  

    npm run dev

If everything is correct, you will receive the following message in console:

  

    Server listening on port 3001

Server port 3001 is the default port, and it is configurable through .env file.

  

### Running in Production

For running your server in dev environment, please use the following command:

  

    npm run start


If everything is correct, you will receive the following message in console:

  

    Server listening on port 3001

Server port 3001 is the default port, and it is configurable through .env file.



## Endpoints
You do several operations with this api: 

### Get All Information
You can ask for all Information stored throug a GET http request to endpoint `/api/information`. This endpoint will give you all the information stored with following structure: 

GET `/api/information`

```json
[
    {
        "id": 1,
        "title": "Cat Image 1",
        "photo": "https://thiscatdoesnotexist.com/",
        "description": "This is a demo of the information page",
        "shortDescription": "This is a demo of the information page",
        "createdAt": "2020-05-06T18:00:00.000Z",
        "isActive": true
    },
    {
        "id": 2,
        "title": "Cat Image 2",
        "photo": "https://thiscatdoesnotexist.com/",
        "description": "This is a demo of the information page",
        "shortDescription": "This is a demo of the information page",
        "createdAt": "2020-05-06T18:00:00.000Z",
        "isActive": false
    }
]
```
### Get Information Filtered by Title
Also, you can filter the elements retrieve by the first endpoint using query param `title`. Just perform a GET http request to endpoint `/api/information?title={string}` and you will get all the elements that contains the string in the title property: 

GET `/api/information?title=3`
```json
[
    {
        "id": 3,
        "title": "Cat Image 3",
        "photo": "https://thiscatdoesnotexist.com/",
        "description": "This is a demo of the information page",
        "shortDescription": "This is a demo of the information page",
        "createdAt": "2020-05-06T18:00:00.000Z",
        "isActive": true
    }
]
```
search is case-senssitive.
### Get Details for a record stored in database
In the case you want to retrieve the details of one particular item, you can perform a GET http request to endpoint `/api/information/{id}` passing the id as parameter. This operation will retrieve: 

GET `/api/information/3`

```json
{
    "id": 3,
    "title": "Cat Image 3",
    "photo": "https://thiscatdoesnotexist.com/",
    "description": "This is a demo of the information page",
    "shortDescription": "This is a demo of the information page",
    "createdAt": "2020-05-06T18:00:00.000Z",
    "isActive": true
}
```

## To Do

- Create unit testing for routes and endpoints (Integration testing is being done with postman).
- Add handler validation with JOI.
- Add error middleware, BOOM.
- Once it is in a real production situation, helmet should be appropriate configured.
- Add logger and delete all calls to `console.log`. 
- Create Unit testing for future required functions (like create)