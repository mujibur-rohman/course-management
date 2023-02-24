const loginUseCase = require("../../application/use_cases/auth/login");

const authController = (sequelize, DataTypes) => {
  const register = (req, res, next) => {};

  const login = async (req, res, next) => {
    await console.log("userrrrr", req.body);
    const loginCheck = await loginUseCase(req.body, sequelize, DataTypes);
    console.log(loginCheck);
    // if (loginCheck) {
    //   next();
    // }
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
