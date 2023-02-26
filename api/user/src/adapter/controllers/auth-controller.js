const loginUseCase = require("../../application/use_cases/auth/login");

const authController = (sequelize, DataTypes) => {
  const register = (req, res, next) => {};

  const login = async (req, res, next) => {
    const login = await loginUseCase(req, sequelize, DataTypes);
    console.log(login);
    try {
      // cookie options
      const cookieOptions = {
        expired: new Date(
          Date.now() + process.env.TOKEN_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };
      if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

      // send cookie
      res.cookie("token", login.token, cookieOptions);

      return res.status(200).json(login);
    } catch (err) {
      console.log(err);
    }
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
