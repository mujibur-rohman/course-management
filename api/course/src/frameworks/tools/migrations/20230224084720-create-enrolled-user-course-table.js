"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable(
      "enrolled_user_course",
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
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("enrolled_user_course");
  },
};
