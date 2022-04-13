const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    Recipe.create({
      title: "Mia Taco",
      level: "Easy Peasy",
      ingredients: ["Tortilla", "mahi mahi", "onions", "tomatoes", "cheese"],
      cuisine: "South American",
      dishType: "main_course",
      image:
        "https://en.wikipedia.org/wiki/Taco#/media/File:001_Tacos_de_carnitas,_carne_asada_y_al_pastor.jpg",
      duration: 30,
      creator: "Jenny",
    }).then(function (results) {
      console.log("Taco recipe created", results);
    })
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  })
