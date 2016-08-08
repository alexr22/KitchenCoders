// PROJECT 2
// UT BOOT CAMP
// THE KITCHEN CODERS
// Here is where you create all the functions that will do the routing for your app, and the logic of each route.
//
var path = require('path');
var express = require('express');
var router = express.Router();



// route defined for the root of the app
// GET method redirects user to /recipes URI
router.get('/', function (req, res) {
	res.redirect('/home');
});

router.get('/home', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/home.html'));
});



//******************************************************
//  ROUTES FOR INGREDIENTS
//******************************************************
// route defined for the root of the app
// GET method redirects user to /recipes URI
router.get('/ingredients', function (req, res) {
	res.sendFile(path.join(__dirname + '/../public/ingredients.html'));
});


module.exports = router;
