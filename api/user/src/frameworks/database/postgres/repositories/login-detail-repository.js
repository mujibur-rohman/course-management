const loginDetailModel = require("../models/loginDetails");

const loginDetailRepository = (sequlize, DataTypes) => {
  const loginDetail = loginDetailModel(sequlize, DataTypes);
  const findAll = async () => {
    return await loginDetail.findAll();
  };
  const findOne = () => {};
  const findById = () => {};
  const findOrCreate = async (payload) => {
    return await loginDetail.findOrCreate({
      where: payload,
    });
  };

  const create = async ({ userId, token, meta }) => {
    return await loginDetail.create({
      userId: userId,
      token: token,
      meta: meta,
    });
  };

  const destroy = async (id) => {
    return await loginDetail.destroy({
      where: {
        userId: id,
      },
    });
  };

  return { findAll, findOne, findById, findOrCreate, create, destroy };
};

module.exports = loginDetailRepository;
