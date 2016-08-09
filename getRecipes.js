// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require('request');
var fs = require('fs');


    var queryURL = "";
    var numResults = 0;
    var recipeID ="";

  // BigOven key
    var authKey ="b51799f689f89bdc92b57ec5e8f5157e";
    var queryURLBase = "http://food2fork.com/api/search?key=" + authKey + "&q=";

 // Then run a request to the OMDB API with the movie specified
request(queryURLBase + "chicken", function (error, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!error && response.statusCode == 200) {

		// Parse the body of the site and recover just the imdbRating
		// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

		fs.writeFile("recipes.txt", body, function(err) {

			// If the code experiences any errors it will log the error to the console.
    		if(err) {
        		return console.log(err);
    		}

    		// Otherwise, it will print: "movies.txt was updated!"
    		console.log("recipes.txt was updated!");
		});
	}
});

