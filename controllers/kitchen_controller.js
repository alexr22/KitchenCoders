// PROJECT 2
// UT BOOT CAMP
// THE KITCHEN CODERS
// Here is where you create all the functions that will do the routing for your app, and the logic of each route.
//
var express = require('express');
var router = express.Router();
var Recipes = require('../models')["Recipes"];


// route defined for the root of the app
// GET method redirects user to /recipes URI
router.get('/', function (req, res) {
	res.redirect('/recipes');
});

// route defined for the /recipes URI
// GET method - selectAll callback function
router.get('/recipes', function (req, res) {
	Recipes.findAll()
	.then (function(recipes){
		console.log(JSON.stringify(recipes));


		var hbsObject = {recipes};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});




module.exports = router;
