const userModel = require("../models/user");

const userRepository = async (sequlize, DataTypes) => {
  const user = await userModel(sequlize, DataTypes);
  const findAll = async () => {
    return await user.findAll();
  };

  const findAllQ = async (whereClause, includeField) => {
    return await user.findAll({
      where: whereClause,
      include: includeField,
    });
  };

  const findOne = async (whereClause, includeField) => {
    return await user.findOne({
      where: whereClause,
      attributes: {
        include: includeField,
      },
    });
  };

  const findById = () => {};
  const findOrCreate = async (payload) => {
    return await user.findOrCreate({
      where: payload,
    });
  };
  return { findAll, findAllQ, findOne, findById, findOrCreate };
};

module.exports = userRepository;
