'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipeingredient = sequelize.define('Recipeingredients', {
    favorite: DataTypes.BOOLEAN,
    IngredientId: DataTypes.INTEGER,
    RecipeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recipeingredient;
};