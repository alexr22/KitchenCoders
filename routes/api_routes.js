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
	console.log("GET REQUEST RECEIVED BY SERVER");
	Ingredient.findAll()
	.then (function(ingredient){
		console.log("INGREDIENT", ingredient);
		var hbsObject = {ingredient};
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


// GET REQUEST TO URI - /findRecipe  
// user presented with page where she can
// query database for matching recipes
// add addition limitation that all ingredients must be inStock
//
router.get('/findRecipe', function (req, res) {
	res.render('findRecipe');
	
});


// GET REQUEST TO URI - /addRecipe  
// user presented with page where she can
// query database for matching recipes
// add addition limitation that all ingredients must be inStock
//
router.get('/addRecipe', function (req, res) {
	res.render('addRecipe');
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

//******************************************************
//  ROUTES FOR CONTACTUS
//******************************************************
//
// GET REQUEST TO URI - /RECIPE  (*** should change to /RECIPE/RESULTS ??)
// user has entered filtering information, which is used below
// to query database for matching recipes
// add addition limitation that all ingredients must be inStock
//
router.get('/contactUs', function (req, res) {

	res.render('contactUs');

});


//******************************************************
//  ROUTE FOR HOME
//******************************************************
// THIS IS THE HOME PAGE
// From this page, user can decide what to do
// User can
//    (1) go to the ingredients page
//    (2) go to the findRecipes page
//	  (3) go to the addRecipes page
//    (4) go to the preferences page
// router.get('/home', function (req, res) {
// 	res.sendFile(path.join(__dirname + '/../public/home.html'));
// });


//******************************************************
//  ROUTE FOR INGREDIENTS
//******************************************************
// HERE IS WHERE WE SERVE UP THE PUBLIC STATIC HTML PAGE FOR INGREDIENTS
// From this page, user can
//    (1) add ingredients,
//    (2) change status of ingredient to inStock or not inStock, or
//    (3) make a change to an ingredient already in the database (other than inStock)
//    (4) delete an ingredient
//    MODEL THIS AFTER OUR BURGERS HOMEWORK
// router.get('/ingredient', function (req, res) {
// 	res.sendFile(path.join(__dirname + '/../public/ingredient.html'));
// });

//******************************************************
//  ROUTE FOR FIND RECIPE
//******************************************************
// HERE IS WHERE WE SERVE UP THE PUBLIC STATIC HTML PAGE FOR FIND RECIPES
// From this page, user can
//    (1) enter filtering information and initiate a search for recipes,
//    (2) ???
//    (3) ???
//
// *******note - remember to redefine the /recipe route in the api_routes file
// ******* to somethinglike /recipe/results
//router.get('/recipe', function (req, res) {
//	res.sendFile(path.join(__dirname + '/../public/findRecipe.html'));
//});

//
//******************************************************
//  ROUTE FOR ADDING A RECIPE
//******************************************************
// HERE IS WHERE WE SERVE UP THE PUBLIC STATIC HTML PAGE FOR ADDING A RECIPE
// From this page, user can
//    (1) ENTER INFORMATION FOR A RECIPE AND ADD IT TO THE DATABASE
//
// *******note - remember to redefine the /recipe route in the api_routes file
// ******* to somethinglike /recipe/results
//router.get('/recipe', function (req, res) {
//	res.sendFile(path.join(__dirname + '/../public/addRecipe.html'));
//});
//
//
//******************************************************
//  ROUTE FOR PREFERENCES
//******************************************************
// HERE IS WHERE WE SERVE UP THE PUBLIC STATIC HTML PAGE FOR PREFERENCES
// From this page, user can
//    (1) enter information regarding the user's preferences, like food allergies and other dietary restrictins.  Other???
//    (2) ???
//    (3) ???
//
//router.get('/preference', function (req, res) {
//	res.sendFile(path.join(__dirname + '/../public/preferences.html'));
//});

//******************************************************
//  ROUTE FOR SIGN-IN
//******************************************************
// HERE IS WHERE WE SERVE UP THE PUBLIC STATIC HTML PAGE FOR SIGN-IN
// From this page, user can
//    (1) enter user information,
//    (2) indicate whether user is a first time user
//    (3) ???
//
//router.get('/login', function (req, res) {
//	res.sendFile(path.join(__dirname + '/../public/login.html'));
//});

module.exports = router;
