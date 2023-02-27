const roleModel = require("../models/role");

const roleRepository = (sequlize, DataTypes) => {
  const role = roleModel(sequlize, DataTypes);
  const findAll = async () => {
    return await role.findAll();
  };
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

module.exports = roleRepository;
