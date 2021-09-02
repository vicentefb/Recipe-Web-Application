const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')

router.get('/', async (req, res) => {
	let recipes = []
    let searchOptions = {}
    // We check if there was any value passed on by the search bar
    if(req.query.title != null && req.query.title !== ''){
		searchOptions.title = new RegExp(req.query.title, 'i')
	}
	try {
        // we either pass an empty JSON or a JSON with a title to look for a match
        recipes = await Recipe.find(searchOptions).exec()
        // We look for all ingredients
        const db = await Recipe.find({})
		var ingredients_list = [];
		db.forEach(element => {
			element.ingredients.forEach(i =>{
				ingredients_list.push(i)
			})
		})
        // We extract unique ingredients so that we can display non-duplicates in the checkboxes
		var unique_ingredients = new Set(ingredients_list);

        // We check that we have at least a checkbox selected and we look for that one
		if(req.query.ingredient != undefined){
			recipes = await Recipe.find({"ingredients":{ $in: req.query.ingredient}})
		}
		
	} catch {
		recipes = []
        res.redirect('/')
	}
	res.render('recipes/index', {recipes: recipes, ingredients:unique_ingredients, searchOptions: req.query})
})

module.exports = router