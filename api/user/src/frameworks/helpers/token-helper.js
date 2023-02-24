const crypto = require("crypto");

const tokenHelper = async () => {
  return (await Date.now()) + crypto.randomBytes(20).toString("hex");
};

module.exports = tokenHelper;
