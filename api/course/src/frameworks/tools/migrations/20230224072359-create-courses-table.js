"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "courses",
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        instructorId: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        openDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        closeDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        thumbnail: {
          type: Sequelize.STRING,
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
    await queryInterface.dropTable("courses");
  },
};
