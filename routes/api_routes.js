// PROJECT 2
// UT BOOT CAMP
// THE KITCHEN CODERS
// Here is where you create all the functions that will do the routing for your api requests, and the logic of each route, including CRUD commands for the MySQL database (using Sequelize).
//
var path = require('path');
var express = require('express');
var router = express.Router();
var Recipe = require('../models')["Recipe"];
var Ingredient = require('../models')["Ingredient"];
var getRecipes = require('../getRecipes');



//******************************************************
//  ROUTES FOR INGREDIENTS
//******************************************************
//
// POST REQUEST TO URI  - /INGREDIENTS
// provide ingredients information to display
// see ingredient.handlebars
// router.get('/ingredient', function (req, res) {
// 	Ingredient.findAll()
// 	.then (function(ingredients){
// 		var hbsObject = {ingredients};
// 		res.render('ingredient', hbsObject);
// 	});
// });

router.get('/ingredient', function (req, res) {
		res.render('ingredient');

});
// POST REQUEST TO URI  - /INGREDIENTS/ADD
// receives new ingredient entered by user
// and updates database with the new ingredient
router.post('/ingredient/add', function (req, res) {
	console.log("ingredient received", req.body);
	Ingredient.create(
		{name: req.body.name,
		category: req.body.category,
		inPantry: req.body.inStock})
		.then (function(){
			res.redirect('/ingredient');
		});
});

router.get('/ingredient', function (req, res) {
	Ingredient.findAll()
	.then (function(ingredients){
		var hbsObject = {ingredients};
		res.render('ingredient', hbsObject);
	});
});// POST REQUEST TO URI - /INGREDIENT/MODIFY/INSTOCK
// user identifies an ingredient and a change to the inStock status
// we update the database with that information

router.put('/ingredient/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	Ingredient.update({inPantry: req.body.inPantry }, {where: {id: req.params.id}})
	.then (function () {
		res.redirect('/ingredient');
	});
});

// POST REQUEST TO URI - /INGREDIENT/MODIFY/OTHER
// user indentifies an ingredient and some change (other than inStock status)
// ?? can this same routine delete the ingredient?  May need a separate
// ??    POST REQUEST to delete
// we update the database with that information


router.get('/home', function (req, res) {
		res.render('home');
	});


//******************************************************
//  ROUTES FOR RECIPES
//******************************************************
//
// GET REQUEST TO URI - /RECIPE  (*** should change to /RECIPE/RESULTS ??)
// user has entered filtering information, which is used below
// to query database for matching recipes
// add addition limitation that all ingredients must be inStock
//
router.get('/recipe', function (req, res) {
	Recipe.findAll()
	.then (function(recipe){
		var hbsObject = {recipe};
		res.render('recipe', hbsObject);
	});
});

//
// POST REQUEST TO URI  - /RECIPE/ADD
// receives new recipe entered by user
// and updates database with the new recipe
//  THIS IS WHERE WE WILL NEED TO MAKE THE ASSOCIATION IN THE DATABASE BETWEEN THE RECIPE AND THE INGREDIENTS IT USES
//

// here is the code that has worked to make that association
// .then(function(){
// 	return models.Recipe.create(
// 		{title: 'Turkey Sandwich',
// 		 instructions: 'Take out two pieces of Bread. Spread mayo on one slice and mustard on the other. Add a layer of turkey, cheese, tomatoes, and lettuce.',
// 		 cuisine: 'Miscellaneous'
// 		})
// 	.then(function(recipe){
//     return models.Ingredient.findAll({where: {name: ['Lettuce','Turkey','Tomatoes']}})
//     	.then(function(ingredients){recipe.addIngredients(ingredients);
//     	})
// 	})

// })

//******************************************************
//  ROUTES FOR ADMINISTRATOR
//******************************************************
//
// GET REQUEST TO URI - /ADMIN/ADD
// user has entered filtering information, which is used below
// to query Spoonacular for matching recipes
// then call getRecipes to load database with results
//
//

router.post('/admin/add', function (req, res) {
	console.log("request for recipe gathering received", req.body);
	getRecipes(
		{searchTerm: req.body.searchTerm,
			category: req.body.vegan});
	console.log("recipes added to database");
	res.redirect('/home');

});

module.exports = router;
