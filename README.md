<h1 align="center">
  <a href="#">Tasks API</a>
</h1>

<h3 align="center">
  A tasks API developed with pure Node.js
</h3>

<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#api-routes">API Routes</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#author">Author</a>
</p>


## About

Tasks API - is the first challenge of the Node.js track of the Ignite course by @Rocketseat

---

## Features

- [x] List tasks
- [x] Search tasks
- [x] Add tasks
- [x] Update tasks
- [x] Delete tasks
- [x] Mark task as completed
- [x] Importing tasks in bulk from a CSV file
- [x] Persist data in local database (JSON file: db.json)

---

## API Routes

- **_GET /tasks_**
  - Listing with or without filters of tasks depending on the existence of the query paramter: 'search' and its value
- **_POST /TASKS_**
  - Task creation in the local database (db.json file), it is necessary: title and description only
- **_PUT /tasks/:id_**
  - Update task according to the content of the request body, it is necessary: title and description only
- **_DELETE /tasks/:id_**
  - Delete task according to ID passed as route parameter
- **_PATCH /tasks/:id/completed_**
  - Mark task as completed

---

## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/) and a REST client like [Insomnia](https://insomnia.rest/)

#### Run the app

```bash
# Clone this repository
$ git clone https://github.com/Artur-Poffo/01-Tasks-Ignite.git

# Access the project folder cmd/terminal
$ cd 01-Tasks-Ignite

# install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# The server will start at port: 3333 - You can now test in Insomnia or another REST client: http://localhost:3333
```

#### And the CSV?

To load the CSV you must populate the CSV file in the path: `./streams/tasks.csv` or replace it with a ready-made CSV file but with the same name: `tasks.csv` and while running the project as described above, run it in the root directory of project: `node ./streams/csv-load.js`, this way the content of the CSV will be converted into tasks and saved in the local database, remembering that the format of the content of your CSV file must follow the same pattern as the default file: `tasks.csv`

---

## Tech Stack

The following tools were used in the construction of the project:

- **Node.js**
- **Javascript**
- **csv-parse**

> See the file  [package.json](https://github.com/Artur-Poffo/01-Tasks-Ignite/blob/main/package.json)

---

## Author

- _**Artur Poffo - Developer**_

[![Linkedin Badge](https://img.shields.io/badge/-Artur-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/arturpoffo/)](https://www.linkedin.com/in/arturpoffo/)
[![Gmail Badge](https://img.shields.io/badge/-arturpoffop@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:arturpoffop@gmail.com)

---