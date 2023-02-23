const permissionModel = require("../models/permission");
module.exports = function roleRepository(sequlize) {
  const permission = permissionModel(sequlize);
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
