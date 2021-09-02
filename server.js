// We are going to use MVC to hold our views folder
const DATABSE_URL = ""
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
// Body-parser helps us get data from our server
const bodyParser = require('body-parser')

// route folder to hold the routes to differnt paths
// indexRouter variable is going to be set to the router variable in index.js
// recipeRouter variable is goint to be set to the router variable in recipes.js
const indexRouter = require('./routes/index')
const recipeRouter = require('./routes/recipes')



app.set('view engine', 'ejs')
// Every view file will be placed inside this view folder
app.set('views', __dirname + '/views')
// Every single layout file will placed inside this layout
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
// This configuration needs to take place before the routes configuration
app.use(bodyParser.urlencoded({limit: '10mb', extended: false }))
// Where our public files are going to be: css, style sheets, etc
app.use(express.static('public'))

// Tell the app that we want to use the router variables that we created
app.use('/', indexRouter)
app.use('/recipes', recipeRouter)


// We are going to import mongoose to be able to integrate the application with mongodb
const mongoose = require('mongoose')

// Set connection to the database
// We want the connection to be dynamic using URL provided by mongo
mongoose.connect(DATABSE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection
// if there's an error
db.on('error', error => console.error(error))

// Once we connect for the first time
db.once('open', () => console.log('Connected to Mongoose'))

app.listen(3000)