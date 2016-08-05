'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    routeName: DataTypes.STRING,
    title: DataTypes.STRING,
    instructions: DataTypes.STRING,
    cuisine: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Recipe.belongsToMany(models.Ingredient, {through: 'RecipeIngredient'});
        // associations can be defined here
      }
    }
  });
  return Recipe;
};