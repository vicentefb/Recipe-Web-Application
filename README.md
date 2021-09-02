# Mybrary Web Application

Recipe-Web-Application is a very simple web app for recipes.

### Build

```sh
git clone https://github.com/vicentefb/Recipe-Web-Application.git
cd Recipe-Web-Application
npm install
npm run devStart
```
Go to **localhost:3000**

### Tech

Following the MVC (Model, View, Controller) pattern, Mybrary uses some open source projects to work properly:

* HTML and CSS for structuring and styling the web app
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [MongoDB] - database


   [MongoDB]: <https://www.mongodb.com/es>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>

### Folder structure
```
.
├── model                   # Handles data logic and interacts with database
├── public                  # Contains CSS stylesheets
├── routes                  # Handles request flow
├── views                   # Handles data presentation and it is dynamically rendered
├── .gitignore                  
├── README.md
├── package-lock.json
├── package.json
└── server.js
```