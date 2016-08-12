var path = require('path');
var path = require('path');
var express = require('express');
var router = express.Router();
var Recipe = require('../models')["Recipe"];
var Ingredient = require('../models')["Ingredient"];
var Recipeingredient = require('../models')["RecipeIngredient"];
var getRecipes = require('../getRecipes');

var globalRecipes = [];
var arrayOfRecipeIngredients = [];
var ingredientsInPantry = [];
var recipes = [];

Ingredient.findAll({
	attributes: ['id'],
	where: {inPantry : true}
})
	.then (function(ingredients){
		ingredientsInPantry = ingredients;
	});


function combineArrays(array1, array2){
	for (var i = 0; i < array1.length; i++) {
		recipes[i] =
		{id: array1[i],
		ingredients: array2[i]}
	}
}

function gatherIngredients(recipesParam){
  var i = 0;
  function forloop(){
    if(i<recipesParam.length){
        models.Recipeingredient.findAll({
        	attributes: ['IngredientId'],
        	where: {RecipeId = recipesParam[i]}
        })
        .then(function(recIngredient){
        	arrayOfRecipeIngredients.push(recIngredient);
            i++;
            forloop();
        });
    }
    else{
        console.log("done with loop");
    }
  }
  forloop();
  combineArrays(globalRecipes, arrayOfRecipeIngredients);
}

Recipe.findAll({
	attributes: ['id'],
})
	.then (function(recipes){
		globalRecipes = recipes;
		gatherIngredients(recipes);
	});

//module.exports = function(recipes, ingredientsInPantry)
//{



//here is the recipes variable, it only has titles and ingredients
//var recipes = [
//	{title: "chicken soup", ingredients: ["chicken", "carrot", "avocado", "cheese"]},
//	{title: "sandwich", ingredients: ["bread", "turkey", "lettuce", "cheese"]},
//	{title: "taco", ingredients: ["chicken", "tortilla",  "tomatoes", "cheese"]}];
//here are the ingredients in the user's kitchen
//var ingredientsInPantry = ["cheese", "chicken", "tomatoes", "tortilla"];






var count = 0;
var percentages = [];


//3 for loops
//I like to think of it from the inside out.

//3) this loops through the recipes 1 by 1
for (var j=0; j<recipes.length; j++){
	//2) this will loop through the ingredients of the recipe
	for(var k=0; k<recipes[j].ingredients.length; k++) {
		//1) START HERE this will loop through all of the users ingredients and see if it matches the ingredients of the recipe starting with the [0] recipe
		for(var i=0; i<ingredientsInPantry.length; i++) {
			if (ingredientsInPantry[i] == recipes[j].ingredients[k]) {
				count++;
			};

		};
		//console.log(count);

	};
	//finds the percentage of ingredients the user has in each recipe and pushes them to an array
	var percentage = count/(recipes[j].ingredients.length);
	percentages.push(percentage);
	var count = 0;

}

//this will give you all of the percentages in an array. we need to find the highest 3 percentages to find 3 recipes the customer could make
console.log(percentages);


//this is the function that finds the 3 highest percentages.  i just copy/pasted it off the internet pretty much
function findLargest3(){
    // sort descending
    percentages.sort(function(a,b) {
        if (a < b) { return 1; }
        else if (a == b) { return 0; }
        else { return -1; }
    });

    alert(percentages+"/******/"+percentages[0]+"/"+percentages[1]+"/"+percentages[2]);
}

findLargest3();


//} //end of getRecipes function

