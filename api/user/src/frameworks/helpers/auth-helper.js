const bcrypt = require("bcrypt");
const joi = require("joi");
const tokenHelper = require("./token-helper");

const authHelper = async (userRepo, loginDetailRepo) => {
  const encryptPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10, "a");
    return bcrypt.hashSync(password, salt);
  };

  const checkUserLogin = async ({ email, password }) => {
    const user = await (await userRepo).findOne({ email }, ["password"]);

    //joi validation
    const schema = joi.object({
      password: joi.required(),
      password_confirmation: joi
        .valid(joi.ref("password"))
        .error(new Error("message: wrong password")),
    });

    if (!user) {
      return false;
    }

    //check password from form with password from db
    try {
      const passwordValidation = await schema.validateAsync({
        password: password,
        password_confirmation: user.password,
      });

      user.password = undefined;
      return user;
    } catch (err) {
      return err.details;
    }
  };

  const compare = async (password, password_confirmation) => {
    //joi validation
    const schema = joi.object({
      password: joi.required(),
      password_confirmation: joi.valid(joi.ref("password")),
    });

    try {
      const passwordValidation = await schema.validateAsync({
        password: password,
        password_confirmation: password_confirmation,
      });

      return true;
    } catch (err) {
      return err.details;
    }
  };

  const getDetailLogin = async (userId, req) => {
    const loginDetail = {
      userId: userId,
      token: await tokenHelper(),
      meta: {
        browser: req.useragent.browser,
        version: req.useragent.version,
        os: req.useragent.os,
        platform: req.useragent.platform,
      },
    };

    return await loginDetailRepo.create(loginDetail);
  };

  const verify = () => {};

  return {
    getDetailLogin,
    encryptPassword,
    checkUserLogin,
    compare,
    verify,
  };
};

module.exports = authHelper;
