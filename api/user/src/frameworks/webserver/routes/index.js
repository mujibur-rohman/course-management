//routes per method
const server = require("../server");
const authRoute = require("./auth-router");

//repositories
const roleRepo = require("../../database/" +
  process.env.DB_CONNECTION +
  "/repositories/role-repository");
const permissionRepo = require("../../database/" +
  process.env.DB_CONNECTION +
  "/repositories/role-repository");

//index route
function index(router, sequlize, DataTypes) {
  router.use(
    "/api/v1/auth",
    authRoute(
      router,
      roleRepo(sequlize, DataTypes),
      permissionRepo(sequlize, DataTypes)
    )
  );
}

module.exports = index;
