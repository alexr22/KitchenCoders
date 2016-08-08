// PROJECT 2
// UT BOOT CAMP
// THE KITCHEN CODERS
// Here is where you create all the functions that will do the routing for your public html files, and the logic of each route.
//
var path = require('path');
var express = require('express');
var router = express.Router();



//******************************************************
//  ROUTE FOR ROOT
//******************************************************
// user is redirected to the home page
router.get('/', function (req, res) {
	res.redirect('/home');
});

//******************************************************
//  ROUTE FOR HOME 
//******************************************************
// THIS IS THE HOME PAGE
// From this page, user can decide what to do
// User can
//    (1) go to the ingredients page (see below)
//    (2) go to the recipes page (see below)
//    (3) go to the preferences page (see below)
router.get('/home', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/home.html'));
});


//******************************************************
//  ROUTE FOR INGREDIENTS
//******************************************************
// HERE IS WHERE WE SERVE UP THE PUBLIC STATIC HTML PAGE FOR INGREDIENTS
// From this page, user can
//    (1) add ingredients,
//    (2) change status of ingredient to inStock or not inStock, or
//    (3) make a change to an ingredient already in the database (other than inStock)
router.get('/ingredient', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/ingredient.html'));
});

//******************************************************
//  ROUTE FOR RECIPE
//******************************************************
// HERE IS WHERE WE SERVE UP THE PUBLIC STATIC HTML PAGE FOR RECIPES
// From this page, user can
//    (1) enter filtering information and initiate a search for recipes,
//    (2) ???
//    (3) ???
//
// *******note - remember to redefine the /recipe route in the api_routes file
// ******* to somethinglike /recipe/results
//router.get('/recipe', function (req, res) {
//	res.sendFile(path.join(__dirname + '/../public/recipe.html'));
//});

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
//	res.sendFile(path.join(__dirname + '/../public/preference.html'));
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
