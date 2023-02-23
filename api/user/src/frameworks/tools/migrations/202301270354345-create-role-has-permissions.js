"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("role_has_permissions", {
      permissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "permissions",
          key: "id",
        },
        allowNull: false,
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("role_has_permissions");
  },
};
