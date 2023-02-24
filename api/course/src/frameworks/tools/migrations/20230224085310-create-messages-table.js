"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "messages",
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        forumId: {
          type: Sequelize.BIGINT,
          allowNull: false,
          references: {
            model: {
              tableName: "disscussion_forums",
            },
            key: "id",
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        senderId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
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
    await queryInterface.dropTable("messages");
  },
};
