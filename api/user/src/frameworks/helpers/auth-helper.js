const bcrypt = require("bcrypt");

const authHelper = async ({ email, password }, userRepo) => {
  const encryptPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10, "a");
    return bcrypt.hashSync(password, salt);
  };

  const checkUserLogin = async () => {
    const user = await userRepo.findOne({ email }, ["password"]);
    if (!user) {
      return false;
    }
    const validPassword = user.validPassword(password, user.password);

    if (!validPassword) {
      return false;
    }
    user.password = undefined;
    return user;
  };

  const compare = () => {};

  const verify = () => {};

  return await {
    encryptPassword,
    checkUserLogin,
    compare,
    verify,
  };
};

module.exports = authHelper;
