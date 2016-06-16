# grio-challenge-simple-api
Simple APIs written in Node+Express for grio candidates to use in their challenges.

## Setup
* `npm install`
* `npm start`

## Endpoints
`GET /random/numbers`  
Returns a json of 100 integers ranging from 0 to 1000 (unique and in a random order):  
`{ “numbers” : [ 5, 600, 2, … , 10 ] }` 

`GET /random/words`  
Returns an unordered list of all the countries:  
`{ “words”: [ “Canada”, “Philippines”, “Croatia”, ... ] }` 

`GET /countries`  
Returns a list of country objects:  
`{ “countries”: [ { “name”: “Canada”, “code”: “CA” }, { “name”: “Philippines”, “code”: “PH” }, … ] }` 

