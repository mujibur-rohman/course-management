"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "contents",
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
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        fileContent: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        meta: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        engine: "InnoDB",
        charset: "utf8mb4",
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contents");
  },
};
