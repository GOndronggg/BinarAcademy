"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "foods",
      [
        {
          name: "Belgian Waffles",
          price: "$5.95",
          description:
            "Two of our famous Belgian Waffles with plenty of real maple syrup",
          calories: "650",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Strawberry Belgian Waffles",
          price: "$7.95",
          description:
            "Light Belgian waffles covered with strawberries and whipped cream",
          calories: "900",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Berry-Berry Belgian Waffles",
          price: "$8.95",
          description:
            "Belgian waffles covered with assorted fresh berries and whipped cream",
          calories: "900",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "French Toast",
          price: "$4.50",
          description: "Thick slices made from our homemade sourdough bread",
          calories: "600",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Homestyle Breakfast",
          price: "$6.95",
          description:
            "Two eggs, bacon or sausage, toast, and our ever-popular hash browns",
          calories: "950",
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
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
