'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      Ingredient.belongsToMany(models.Recipe, {through: 'RecipeIngredient'});
     }
    }
  });
  return Ingredient;
};