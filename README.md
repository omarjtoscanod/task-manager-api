# Task Manager

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

The url is the following http://server:port/api/v1/tasks

### Crear tarea

Request: POST
Type: JSON
Structure:

    {
    	"description": Description as String,
    	"author": Author as String
    }

Response:

    {
        "status": 200,
        "data": {
        	"description": Description,
        	"author": Author,
        	"creadeAt": Task creation date,
        	"updateAt": ""
        }
    }

### List the tasks

Request: GET
Response:

    {
        "status": 200,
        "data": [
    	    {
    	    	"description": Description,
    	    	"author": Author,
    	    	"creadeAt": Task creation date,
    	    	"updateAt": Task update date
    	    }
    	]
    }

### Get task by identifier

Request: GET
URL: http://server:port/api/v1/tasks/:id
Parameter: id -> Numeric value that refers to the index of the element within the array
Response:

    {
       "status": 200,
        "data": {
        	"description": Description,
    	    "author": Author,
    	    "creadeAt": Task creation date,
    	    "updateAt": ""
        }
    }

### Delete task by identifier

Request: DELETE
URL: http://server:port/api/v1/tasks/:id
Parameter: id -> Numeric value that refers to the index of the element within the array
Response:

     {
    	    "status": 200,
    	    "data": [
    		    {
    		    	"description": Description,
    		    	"author": Author,
    		    	"creadeAt": Task creation date,
    		    	"updateAt": Task update date
    		    }
    		]
    	}

Returns all the elements of the list, without the deleted element

### Update task by identifier

Request: PATCH or PUT
URL: http://server:port/api/v1/tasks/:id
Parameter: id -> Numeric value that refers to the index of the element within the array
Response:

     {
    	    "status": 200,
    	    "data": [
    		    {
    		    	"description": Description,
    		    	"author": Author,
    		    	"creadeAt": Task creation date,
    		    	"updateAt": Task update date
    		    }
    		]
    	}

Returns all the elements of the list, with the updated element in the indicated position
