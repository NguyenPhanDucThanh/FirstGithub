'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('allcodes', 'allcode');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('allcode', 'allcodes');
  }
};
