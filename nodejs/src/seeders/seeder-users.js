"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "thanhnguyen1802dn@gmail.com",
        password: "123456789",
        firstName: "Duc",
        lastName: "Thanh",
        address: "Da Nang",
        gender: 1,
        roleId: "Admin",
        phonenumber: "0935249086",
        positionId: "DaNang",
        image: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
