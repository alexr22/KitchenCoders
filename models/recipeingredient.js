'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipeingredient = sequelize.define('Recipeingredients', {
    amount: DataTypes.DECIMAL,
    unit: DataTypes.STRING,
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