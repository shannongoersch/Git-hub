const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
{ 
	recipeName:{type: String,required: true,unique: true,trim: true,minlength: 3},
    foodname:{type: String, required: true},
    foodname2:{type: String, required: true},
    foodname3:{type: String, required: true},
    foodname4:{type: String, required: true},
    foodname5:{type: String, required: true},
    foodname6:{type: String, required: true}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;