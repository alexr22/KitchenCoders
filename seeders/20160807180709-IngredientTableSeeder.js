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
        return queryInterface.bulkInsert('Ingredient', [
            {name: 'Turkey', category: 'Meat', inPantry: 0},
            {name: 'Wheat Bread', category: 'Bread', inPantry: 0},
            {name:'Lettuce', category: 'Vegetable', inPantry: 0},
            {name: 'Tomatoes', category: 'Vegetable', inPantry: 0},
            {name: 'Mustard', category: 'Condiment', inPantry: 0},
            {name: 'Extra virgin olive oil', category: 'Basics', inPantry: 0},
            {name: 'Flour: all purpose', category: 'Baking', inPantry: 0},
            {name: 'Baking soda', category: 'Baking', inPantry: 0},
            {name: 'Kosher salt', category: 'Basics', inPantry: 0},
            {name: 'Ketchup', category: 'Condiment', inPantry: 0},
            {name: 'Apple cider vinegar', category: 'Basics', inPantry: 0},
            {name: 'Vegetable oil', category: 'Basics', inPantry: 0},
            {name: 'Pure vanilla extract', category: 'Baking', inPantry: 0},
            {name: 'Mayonnaise', category: 'Basics', inPantry: 0},
            {name: 'Milk', category: 'Dairy and Eggs', inPantry: 0},
            {name: 'Plain yogurt: regular or Greek', category: 'Dairy and Eggs ', inPantry: 0},
            {name: 'Unsalted butter', category: 'Dairy and Eggs', inPantry: 0},
            {name: 'Cheddar or mozzarella', category: 'Dairy and Eggs ', inPantry: 0},
            {name: 'Eggs', category: 'Dairy and Eggs', inPantry: 0},
            {name: 'Goat cheese', category: 'Dairy and Eggs', inPantry: 0},
            {name: 'Parmesan (wedge)' category: 'Dairy and Eggs', inPantry: 0},
            {name: 'Onions', category: 'Vegetable', inPantry: 0},
            {name: 'Carrots ', category: 'Vegetable ', inPantry: 0},
            {name: 'Scallions', category: 'Vegetable ', inPantry: 0},
            {name: 'Celery', category: 'Vegetable', inPantry: 0},
            {name: 'Broccoli', category: 'Vegetable', inPantry: 0},
            {name: 'Bell peppers', category: 'Vegetable ', inPantry: 0},
            {name: 'Spinach ', category: 'Vegetable ', inPantry: 0},
            {name: 'Ground beef ', category: 'Freezer', inPantry: 0},
            {name: 'Ground turkey ', category: 'Freezer', inPantry: 0},
            {name: 'Boneless, skinless chicken breasts', category: 'Freezer ', inPantry: 0},
            {name: 'Bacon', category: 'Freezer ', inPantry: 0},
            {name: 'Vanilla ice cream', category: 'Freezer ', inPantry: 0},
            {name: 'Dough: pizza, pie or puff pastry', category: 'Freezer', inPantry: 0}, 
            {name: 'Vegetables: peas, chopped spinach or corn', category: 'Freezer', inPantry: 0},
            {name: 'Hot sauce: Tabasco, Sriracha or sambal', category: 'Condiment', inPantry: 0},
            {name: 'Soy sauce or tamari', category: 'Condiment', inPantry: 0},
        ], {});

    },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Ingredient', null, {});

  }
};
