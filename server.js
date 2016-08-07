
// ============================================================
// DEPENDENCIES
// Node Package Modules
// ============================================================

// import Node File System module express - a fast, unopinionated, minimalist web framework
var express = require('express');
// import Node File System module body-parser - body parsing middleware.  It parses incoming request bodies in a middleware before your handlers
var bodyParser = require('body-parser');
// import Node File System module method-override - lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
var methodOverride = require('method-override');
var models = require('./models');


// PREPARE OUR TABLES in MySQL)
/// extract our sequelize connection from the models object, to avoid confusion
var seqConnection = models.sequelize;


// PREPARE OUR TABLES
// =======================================================================


// We run this query so that we can drop our tables even though they have foreign keys
seqConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// reach into our models object, and create each table based on the associated model.
// note: force:true drops the table if it already exists
.then(function(){
	return seqConnection.sync()
})


.then(function(){
	return models.Recipe.create(
		{title: 'Turkey Sandwich',
		 instructions: 'Take out two pieces of Bread. Spread mayo on one slice and mustard on the other. Add a layer of turkey, cheese, tomatoes, and lettuce.',
		 cuisine: 'Miscellaneous'
		})
	.then(function(recipe){
    return models.Ingredient.findAll({where: {name: ['Lettuce','Turkey','Tomatoes']}})
    	.then(function(ingredients){recipe.addIngredients(ingredients);
    	})
	})

})


// create an instance of express by running the express function

var app = express();

// ====================================================
// Serve static content for the app from the "public" directory in the application directory.
// express.static is express's (only) built-in middleware
// It is used to serve static files such as images and html, css and js files.
// The process.cwd method return the current working directory of the node.js process
app.use(express.static(process.cwd() + '/public'));

// returns middleware that parses URL encoded bodies
//
app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// create an instance of express handlebars
// this allows access to the full API
//
var exphbs = require('express-handlebars');

// tell express to use handlebars as a template engine
// A template engine enables you to use static template files
// in your application.  At runtime, the template engine replaces
// variables in a template file with actual values, and transforms the template
// in to an HTML file sent to the client.
// app.engine(ext, callback) method allows you to create your own template engine
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
// register the template engine
app.set('view engine', 'handlebars');

// local dependency - routes = express.router for all routes
var routes = require('./routes/r_index.js');
// bind routes to root (WHY IS THIS NEEDED IF WE'VE REQUIRED THE CONTROLLER.JS FILE?)
app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT);
