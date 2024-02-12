# rs-node-crud-ap
Assignment: CRUD API Description  Your task is to implement simple CRUD API using in-memory database underneath.

Link to the task: 
https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md

Deadline date: 2024-02-13

## How to use App:

Use: Node.js v20.11.0 LTS
run command: npm run build - for build 
run command: npm run start:dev - for server run


API endpoints:

GET http://localhost:4000/api/users
GET http://localhost:4000/api/users/1abb0708-7c87-4bb5-92df-6a0a4419012d
POST http://localhost:4000/api/users
{
    "username": "New User",
    "age": 33,
    "hobbies": ["football"]
}

PUT http://localhost:4000/api/users/452a10c3-2b9c-4eeb-86ec-39bf3fad7fc5
{
"username": "Updated User",
"age": 20,
"hobbies": ["cycling", "swimming"]
}

DELETE http://localhost:4000/api/users/452a10c3-2b9c-4eeb-86ec-39bf3fad7fc5d



Self-check: Basic Scope

    +10 The repository with the application contains a Readme.md file containing detailed instructions for installing, running and using the application
    +10 GET api/users implemented properly
    +10 GET api/users/{userId} implemented properly
    +10 POST api/users implemented properly
    +10 PUT api/users/{userId} implemented properly
    +10 DELETE api/users/{userId} implemented properly
    +6 Users are stored in the form described in the technical requirements
    +6 Value of port on which application is running is stored in .env file

Advanced Scope

    +30 Task implemented on Typescript
    +10 Processing of requests to non-existing endpoints implemented properly
    +10 Errors on the server side that occur during the processing of a request should be handled and processed properly

    0 Development mode: npm script start:dev implemented properly
    0 Production mode: npm script start:prod implemented properly

Hacker Scope

    +30 There are tests for API (not less than 3 scenarios)

    0 There is horizontal scaling for application with a load balancer

Total: 172 / 222
