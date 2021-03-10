"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Eka",
          password: "123ekaeka",
          age: 20,
          email: "ekadiahca7@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     */

    await queryInterface, bulkDelete("users, null", {});
  },
};
