"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "disscussion_forums",
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        courseId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: {
              tableName: "courses",
            },
            key: "id",
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        engine: "InnoDB",
        charset: "utf8mb4",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
