"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "profiles",
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
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {},
      },
      avatar: {
        type: DataTypes.STRING,
        // allowNull: false,
        validate: {
          // notNull: validation.notNull(),
        },
      },
      gender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {},
      },
    },
    {
      sequelize,
      modelName: "profile",
      validation: {},
    }
  );
  return Profile;
};
