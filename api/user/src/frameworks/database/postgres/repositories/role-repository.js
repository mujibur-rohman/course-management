const roleModel = require("../models/role");
module.exports = function roleRepository(sequlize, DataTypes) {
  const role = roleModel(sequlize, DataTypes);
  const findAll = () => {};
  const findOne = () => {};
  const findById = () => {};
  const findByName = () => {};
  const findOrCreate = (roleName) => {
    return role.findOrCreate({
      where: { name: roleName },
    });
  };
  return { findAll, findOne, findById, findByName, findOrCreate };
};
