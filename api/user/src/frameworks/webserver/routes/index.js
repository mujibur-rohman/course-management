//variable
const dbConnection = process.env.DB_CONNECTION;

//routes per method
const authRoute = require("./auth-router");

//helpers
const authHelper = require("../../helpers/auth-helper");
const tokenHelper = require("../../helpers/token-helper");

//repositories
const userRepo = require("../../database/" +
  dbConnection +
  "/repositories/user-repository");
const roleRepo = require("../../database/" +
  dbConnection +
  "/repositories/role-repository");
const permissionRepo = require("../../database/" +
  dbConnection +
  "/repositories/role-repository");

//index route
function index(app, sequelize, DataTypes) {
  // const repositories = {
  //   userRepo: userRepo(sequelize, DataTypes),
  //   roleRepo: roleRepo(sequelize, DataTypes),
  //   permissionRepo: permissionRepo(sequelize, DataTypes),
  // };

  // const helpers = {
  //   authHelper: authHelper,
  //   tokenHelper: tokenHelper,
  // };

  app.get("/", function (req, res, next) {
    console.log("Router Index Working");
  });

  app.use("/api/v1/auth", authRoute(sequelize, DataTypes));
}

module.exports = index;
