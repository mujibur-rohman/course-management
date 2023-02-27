require("../../helpers/passport-bearer");

//routes per method
const authRoute = require("./auth-router");

//index route
function index(app, sequelize, DataTypes) {
  app.get("/", function (req, res, next) {
    console.log("Router Index Working");
  });

  app.use("/api/v1/auth", authRoute(sequelize, DataTypes));
}

module.exports = index;
