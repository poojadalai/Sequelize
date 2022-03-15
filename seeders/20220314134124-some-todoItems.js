"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Clean House",
          deadline: "23-01-2020",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Make lunch",
          deadline: "23-01-2021",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Office Work",
          deadline: "23-01-2020",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Go to gym",
          deadline: "23-01-2021",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
