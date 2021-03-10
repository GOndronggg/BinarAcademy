"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      "tasks",
      [
        {
          user_id: 1,
          description: "Tasks1",
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          description: "Tasks2",
          status: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          description: "Tasks3",
          status: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          description: "Tasks4",
          status: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          description: "Tasks5",
          status: 5,
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
     *
     */
    await queryInterface.bulkDelete("tasks", null, {});
  },
};
