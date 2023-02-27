const permissionModel = require("../models/permission");

const roleRepository = (sequlize, DataTypes) => {
  const permission = permissionModel(sequlize, DataTypes);
  const findAll = async () => {
    return await permission.findAll();
  };
  const findOne = () => {};
  const findById = () => {};
  const findOrCreate = (payload) => {
    return permission.findOrCreate({
      where: payload,
    });
  };
  return { findAll, findOne, findById, findOrCreate };
};

module.exports = roleRepository;
