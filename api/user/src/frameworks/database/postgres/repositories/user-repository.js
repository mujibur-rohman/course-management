const permissionModel = require("../models/permission");
module.exports = function roleRepository(sequlize, DataTypes) {
  const permission = permissionModel(sequlize, DataTypes);
  const findAll = () => {};
  const findOne = () => {};
  const findById = () => {};
  const findOrCreate = (payload) => {
    return permission.findOrCreate({
      where: payload,
    });
  };
  return { findAll, findOne, findById, findOrCreate };
};
