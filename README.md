# Retail Application's Q&A RESTful API with PostgreSQL Database

## Table of Contents
1. [Overview & Goals](#overview-&-goals)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Schema](#schema)
5. [API Endpoints](#endpoints)
6. [Contributors](#contributors)

## Overview & Goals
Managed database and API servicing retail application's Questions & Answers section.<br>
The intention with this project was to replace the retail application's existing back-end with an optimized version to handle increased traffic load.

## Technologies
* Node v14.17.5
* Express v4.17.1
* PostgreSQL 14
* Sequelize v6.9.0
* Nodemon v2.0.15
* CORS v2.8.5
* Morgan v1.10.0
* PG v8.7.1

## Installation
```
$ git clone https://github.com/teamgonzalo/QA.git
$ cd QA
$ npm install
$ npm start
```

## Schema
<img src="https://i.imgur.com/JLS6KNX.png" width="500" height="500">

## Endpoints

### Get Questions
```http
  GET /qa/questions
```

| Parameter   | Type     | Description                       |
| :---------- | :------- | :-------------------------------- |
| `product_id`| `number` | `product id` |
| `page`| `number` | `page number` |
| `count` | `number` | `number of products per page` |

### Get Answers
```http
  GET /qa/questions/:question_id/answers
```
| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `question_id`| `number` | `ID of the question for which answers are needed` |

### Add Question
```http
  POST /qa/questions
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `body`| `text` | `Text of question being asked` |
| `name`| `text` | `Username for question asker` |
| `email`| `text` | `Email address for question asker` |
| `product_id`| `number` | `Required ID of the Product for which the question is posted` |

### Add Answer
```http
  POST /qa/questions/:question_id/answers
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `question_id`| `number` | `Required ID of the question to post the answer for` |
| `body`| `text` | `Text of question being asked` |
| `name`| `text` | `Username for question asker` |
| `email`| `text` | `Email address for question asker` |
| `photos`| `[text]` | `An array of urls corresponding to images to display` |


### Mark Question Helpful
```http
  PUT /qa/questions/:question_id/helpful
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `question_id`| `number` | `Required ID of the question to update` |


### Report Question
```http
  PUT /qa/questions/:question_id/report
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `question_id`| `number` | `Required ID of the question to update` |


### Mark Answer Helpful
```http
  PUT /qa/answers/:answer_id/helpful
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `answer_id`| `number` | `Required ID of the answer to update` |


### Report Answer
```http
  PUT /qa/answers/:answer_id/report
```

## Contributor
[Thomas Rose](https://www.linkedin.com/in/thomas-rose1990/)