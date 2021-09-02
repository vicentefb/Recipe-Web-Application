const express = require('express')
// indexRouter variable will be equal to router variable
const router = express.Router()
const Recipe = require('../models/recipe')

router.get('/', async (_, res) => {
    let recipes = []
	try {
		// We get a maximum of 10 recipes for the "Homepage"
		recipes = await Recipe.find().limit(10).exec()
	} catch {
		recipes = []
	}
	res.render('index', {recipes: recipes})
})

// We are able to export our router variable so other files are allowed
// to access the exported code
module.exports = router