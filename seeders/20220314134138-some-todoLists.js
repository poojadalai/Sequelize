"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Sweta Tiwari",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Jullia",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Annam",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
