const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var url = 'https://images.media-allrecipes.com/images/75131.jpg';

const recipeSchema = new Schema({
  title: String,
  level: [{type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']}],
  ingredients: [ { type: String } ],
  cuisine: {type: String, required: true},
  dishType: [{type: String, enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']}],
  image: {type: String, default: url},
  duration: Number,
  creator: String,
  created: {type: Date, default: Date.now}
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
