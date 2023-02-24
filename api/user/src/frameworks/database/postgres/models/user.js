"use strict";
const bcrypt = require("bcrypt");

module.exports = async (sequelize, DataTypes) => {
  await console.log("user model", sequelize.define);
  return await sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true,
        // validate: {

        // },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {},
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["password"],
        },
      },
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bcrypt.genSaltSync(10, "a");
            user.password = bcrypt.hashSync(user.password, salt);
          }
        },
      },
      sequelize,
      modelName: "User",
      validation: {},
    }
  );
};
