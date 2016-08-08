'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Recipe', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      routeName: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.STRING
      },
      cuisine: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Recipe');
  }
};