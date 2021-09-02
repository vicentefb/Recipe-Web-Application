const mongoose = require('mongoose')
/*
A recipe has only two attributes
    * Title
    * Many ingredients
*/
const recipeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    ingredients:[{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('Recipe', recipeSchema)