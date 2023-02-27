"use strict";
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "permissions",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {},
      },
    },
    {
      sequelize,
      modelName: "permission",
      validation: {},
    }
  );
  return Permission;
};
