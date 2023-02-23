"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {
        foreignKey: "userId",
      });

      User.hasMany(models.LoginDetail, {
        foreignKey: "userId",
      });

      User.belongsToMany(models.Role, {
        through: "user_has_roles",
        // as: "roles",
        foreignKey: "userId",
      });

      User.belongsToMany(models.Permission, {
        through: "user_has_permissions",
        // as: "permissions",
        foreignKey: "userId",
      });
    }

    validPassword(password, userPassword) {
      return bcrypt.compareSync(password, userPassword);
    }
  }

  User.init(
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
  return User;
};
