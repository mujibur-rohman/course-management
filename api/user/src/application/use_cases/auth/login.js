const joi = require("joi");
const userRepo = require("../../../frameworks/database/postgres/repositories/user-repository");

const login = async ({ email, password }, sequelize, DataTypes) => {
  //joi validation
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  });
  //   schema.validate({ email: email, password: password });

  try {
    const value = await schema.validateAsync({
      email: email,
      password: password,
    });
    //cek db user login account
    const user = helpers.authHelper(
      user,
      userRepo(sequelize, DataTypes)
    ).checkUserLogin;
    console.log("userrrrr", user);
    if (user) {
      //generate token
      const token = await helpers.tokenHelper();
      console.log("token", token);
      if (token) {
        return { user: user, token: token };
      }
    }

    return value;
  } catch (err) {
    console.log();
    return err;
  }
};

module.exports = login;
