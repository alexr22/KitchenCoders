// PROJECT 2
// UT BOOT CAMP
// THE KITCHEN CODERS
// Here is where you create all the functions that will do the routing for your app, and the logic of each route.
//
var path = require('path');
var express = require('express');
var router = express.Router();
var Recipe = require('../models')["Recipe"];
var Ingredient = require('../models')["Ingredient"];



//******************************************************
//  ROUTES FOR INGREDIENTS
//******************************************************
// 
router.post('/ingredients/add', function (req, res) {
	console.log("ingredients received", req.body);
	Ingredient.create(
		{name: req.body.name,
			category: req.body.category,
			inPantry: req.body.inStock})
		.then (function(){
			res.redirect('/ingredients');
		});
});

// route defined for the /recipes URI
// GET method - selectAll callback function
router.get('/recipe', function (req, res) {
	Recipe.findAll()
	.then (function(recipe){
		var hbsObject = {recipe};
		res.render('index', hbsObject);
	});
});


module.exports = router;
