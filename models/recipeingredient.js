'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipeingredient = sequelize.define('Recipeingredient', {
    favorite: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Recipeingredient;
};