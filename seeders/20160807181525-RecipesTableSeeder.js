'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        return queryInterface
          .bulkInsert('Recipe',
            [{title: 'Bologna Sandwich',
            instructions: 'Take out two pieces of Bread. Spread mayo on one slice and mustard on the other. Add a layer of bologna, cheese, tomatoes, and lettuce.',
            cuisine: 'Miscellaneous'
            }],

      {});
},

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  return queryInterface.bulkDelete('Recipe', null, {});}
};
