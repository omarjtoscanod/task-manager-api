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

```
    {
    	"firstName": First name as String,
    	"lastName": Last name as String,
    	"email":  email as String
    }
```

**Response:**

```
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
```

### Update User

Update firstname, lastname and email attributes.

**Request**: PUT

**Type:** JSON

**URL:** http://server:port/api/v1/users/:id

Where :id is the user identifier

**Structure:**

```
    {
    	"firstName": First name as String,
    	"lastName": Last name as String,
    	"email":  email as String
    }
```

**Response:**

```
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
```

Update the enabled attribute

**Request**: PATCH

**Type:** JSON

**URL:** http://server:port/api/v1/users/:id

Where :id is the user identifier

**Structure:**

```
     {
        "enabled" : false
    	}
```

**Response:**

```
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
```

### List all users

List all users

**Request**: GET

**URL:** http://server:port/api/v1/users

**Response:**

```
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
```

### Get a user by identifier

Obtains the information of a user given his identifier

**Request**: GET

**URL:** http://server:port/api/v1/users/:id

Where :id is the user identifier

**Response:**

```
       {
        "data": {

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
    }
```

### Create task

Create a task

**Request**: POST

**Type:** JSON

**URL:** http://server:port/api/v1/tasks

**Structure:**

```
    {
    	"description": Task Description as String,
    	"author": task author as String (Must match the _id field of users)
    }
```

**Response:**

```
{
    "data": {
        "description": Task Description,
        "author": {
            "_id": Identifier assigned by the database manager as String,
            "firstName": First name as String,
            "lastName": Last name as String,
            "email": email as String,
            "enabled": If the user is enabled: true and false otherwise as boolean,
            "createdAt": User Creation Date as Timestamp,
            "updatedAt": User Update Date as Timestamp,
            "__v": Version as Number,
            "fullName": Full Name as String,
            "id": Identifier assigned by the database manager as String
        },
        "_id": Identifier assigned by the database manager as String,
        "createdAt": Task Creation Date as Timestamp,
        "updatedAt": Task Update Date as Timestamp,
        "__v": Version as Number
    }
}
```

### Get task by identifier

Get a task given an identifier

**Request**: GET

**Type:** JSON

**URL:** http://server:port/api/v1/tasks/:id

Where :id is the task identifier

**Response:**

```
{
    "data": {
        "_id": Identifier assigned by the database manager as String,
        "description": Task Description,
        "author": {
            "_id": Identifier assigned by the database manager as String,
            "firstName": First name as String,
            "lastName": Last name as String,
            "email": email as String,
            "enabled": If the user is enabled: true and false otherwise as boolean,
            "createdAt": User Creation Date as Timestamp,
            "updatedAt": User Update Date as Timestamp,
            "__v": Version as Number,
            "fullName": Full Name as String,
            "id": Identifier assigned by the database manager as String
        },
        "createdAt": Task Creation Date as Timestamp,
        "updatedAt": Task Update Date as Timestamp,
        "__v": Version as Number
    }
}
```

### List all tasks

Get all tasks

**Request**: GET

**Type:** JSON

**URL:** http://server:port/api/v1/tasks/

**Response:**

```
{
    "data": {
        "_id": Identifier assigned by the database manager as String,
        "description": Task Description,
        "author": {
            "_id": Identifier assigned by the database manager as String,
            "firstName": First name as String,
            "lastName": Last name as String,
            "email": email as String,
            "enabled": If the user is enabled: true and false otherwise as boolean,
            "createdAt": User Creation Date as Timestamp,
            "updatedAt": User Update Date as Timestamp,
            "__v": Version as Number,
            "fullName": Full Name as String,
            "id": Identifier assigned by the database manager as String
        },
        "createdAt": Task Creation Date as Timestamp,
        "updatedAt": Task Update Date as Timestamp,
        "__v": Version as Number
    }
}
```

### Update task

Update the author and description information of a task

**Request**: PUT - PATCH

**Type:** JSON

**URL:** http://server:port/api/v1/tasks/:id

Where :id is the task identifier

**Structure:**

```
    {
    	"description": Task Description as String,
    	"author": task author as String (Must match the _id field of users)
    }
```

**Response:**

```
{
    "data": {
        "_id": Identifier assigned by the database manager as String,
        "description": Task Description,
        "author": {
            "_id": Identifier assigned by the database manager as String,
            "firstName": First name as String,
            "lastName": Last name as String,
            "email": email as String,
            "enabled": If the user is enabled: true and false otherwise as boolean,
            "createdAt": User Creation Date as Timestamp,
            "updatedAt": User Update Date as Timestamp,
            "__v": Version as Number,
            "fullName": Full Name as String,
            "id": Identifier assigned by the database manager as String
        },
        "createdAt": Task Creation Date as Timestamp,
        "updatedAt": Task Update Date as Timestamp,
        "__v": Version as Number
    }
}
```

### Delete task

Delete a task

**Request**: GET

**Type:** JSON

**URL:** http://server:port/api/v1/tasks/:id

Where :id is the task identifier

**Response:**

Status: 204 No Content
