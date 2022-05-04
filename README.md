Public API that allows users to manage tasks

## Installation

To install, run the command

> npm install

Copy `.env.example` to `.env` and set your environment variables

## Start

To run the api, consider the following command

`npm start`

## Structure

The services available and the structure of the information that must be sent are listed below.

The url for tasks is as follows: http://server:port/api/v1/tasks?limit=x&skip=y

The url for users is as follows: http://server:port/api/v1/users?limit=x&skip=y

where **_limit_** is the number of records to display and **_skip_** is the number of records to skip

## Operation

In order to manage tasks, it is necessary to create the user who owns the task.

### Create user

Create a user

**Request**: POST

**Type:** JSON

**URL:** http://server:port/api/v1/users

**Structure:**

    {
    	"firstName": First name as String,
    	"lastName": Last name as String,
    	"email":  email as String
    }

**Response:**

    {
        "data": {
            "firstName": First name as String,
            "lastName": Last name as String,
            "email": email as String,
            "enabled": If the user is enabled: true and false otherwise as boolean,
            "_id": Identifier assigned by the database manager as String,
            "createdAt": User Creation Date as Timestamp,
            "updatedAt": User Update Date as Timestamp,
            "__v": Version as Number,
            "fullName": Full Name as String,
            "id": Identifier assigned by the database manager as String
        }
    }

### Update User

**Request**: PUT

Update firstname, lastname and email attributes.

**Type:** JSON

**URL:** http://server:port/api/v1/users/:id

Where :id is the user identifier

**Structure:**

    {
    	"firstName": First name as String,
    	"lastName": Last name as String,
    	"email":  email as String
    }

**Response:**

    {
        "data": {
            "firstName": First name as String,
            "lastName": Last name as String,
            "email": email as String,
            "enabled": If the user is enabled: true and false otherwise as boolean,
            "_id": Identifier assigned by the database manager as String,
            "createdAt": User Creation Date as Timestamp,
            "updatedAt": User Update Date as Timestamp,
            "__v": Version as Number,
            "fullName": Full Name as String,
            "id": Identifier assigned by the database manager as String
        }
    }

**Request**: PATCH

Update the enabled attribute

**Type:** JSON

**URL:** http://server:port/api/v1/users/:id

Where :id is the user identifier

**Structure:**

       {
        "enabled" : false
    	}

**Response:**

    {
        "data": {
            "firstName": First name as String,
            "lastName": Last name as String,
            "email": email as String,
            "enabled": If the user is enabled: true and false otherwise as boolean,
            "_id": Identifier assigned by the database manager as String,
            "createdAt": User Creation Date as Timestamp,
            "updatedAt": User Update Date as Timestamp,
            "__v": Version as Number,
            "fullName": Full Name as String,
            "id": Identifier assigned by the database manager as String
        }
    }

### List all users

**Request**: GET

List all users

**URL:** http://server:port/api/v1/users

**Response:**

       {
        "data": [
            {
                "_id": Identifier assigned by the database manager as String,
                "firstName": First name as String,
                "lastName": Last name as String,
                "email": email as String,
                "enabled": If the user is enabled: true and false otherwise as boolean,
                "createdAt": User Creation Date as Timestamp,
                "updatedAt": User Update Date as Timestamp,
                "__v": Version as Number,
                "fullName": "Omar Toscano",
                "id": Identifier assigned by the database manager as String
            }
    	],
        "meta": {
            "limit": the number of records to display,
            "skip": the number of records to skip
        }
    }
