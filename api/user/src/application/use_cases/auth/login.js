const joi = require("joi");
const authHelper = require("../../../frameworks/helpers/auth-helper");
const userRepository = require("../../../frameworks/database/postgres/repositories/user-repository");
const loginDetailRepository = require("../../../frameworks/database/postgres/repositories/login-detail-repository");

const login = async (req, sequelize, DataTypes) => {
  const authHelp = authHelper(
    userRepository(sequelize, DataTypes),
    loginDetailRepository(sequelize, DataTypes)
  );

  //joi validation
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  });

  try {
    //validate req body
    const userValidation = await schema.validateAsync({
      email: req.body.email,
      password: req.body.password,
    });

    //check user login account exist in db
    const user = await (await authHelp).checkUserLogin(userValidation, req);
    if (user == true) {
      //generate token with user agent
      const detailLogin = await (await authHelp).getDetailLogin(user.id, req);
      if (detailLogin) {
        return {
          user: user,
          token: detailLogin.token,
          meta: detailLogin.meta,
        };
      }
    } else {
      return user;
    }
  } catch (err) {
    return err;
  }
};

module.exports = login;
