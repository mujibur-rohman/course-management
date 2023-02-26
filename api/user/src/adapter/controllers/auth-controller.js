const loginUseCase = require("../../application/use_cases/auth/login");

const authController = (sequelize, DataTypes) => {
  const register = (req, res, next) => {};

  const login = async (req, res, next) => {
    const login = await loginUseCase(req, sequelize, DataTypes);
    return res.status(200).json(login);
  };

  const logout = (req, res, next) => {};

  const callbackGoogle = (req, res, next) => {};

  const verifyCallbackGoogle = (req, res, next) => {};

  return {
    register,
    login,
    logout,
    callbackGoogle,
    verifyCallbackGoogle,
  };
};

module.exports = authController;
