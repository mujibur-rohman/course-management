"use strict";
module.exports = (sequelize, DataTypes) => {
  const LoginDetail = sequelize.define(
    "login_details",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      token: {
        type: DataTypes.STRING,
      },
      meta: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "logindetail",
      validation: {},
    }
  );
  return LoginDetail;
};
