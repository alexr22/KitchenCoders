'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Recipeingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      favorite: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      IngredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Recipe',
          key: 'id'
        },
      onUpdate: 'cascade',
      onDelete: 'cascade'
      },
      RecipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredient',
          key: 'id'
        },
      onUpdate: 'cascade',
      onDelete: 'cascade'
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Recipeingredients');
  }
};