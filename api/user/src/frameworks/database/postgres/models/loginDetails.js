"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoginDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LoginDetail.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }

  LoginDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
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
      modelName: "LoginDetail",
      validation: {},
    }
  );
  return LoginDetail;
};
