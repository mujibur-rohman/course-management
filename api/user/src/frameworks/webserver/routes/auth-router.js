const authController = require("../../../adapter/controllers/auth-controller");
const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");

// For parsing application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));
// For parsing application/json
router.use(express.json());

const authRoute = (sequelize, DataTypes) => {
  const controller = authController(sequelize, DataTypes);
  router.post("/login", controller.login);

  return router;
};

module.exports = authRoute;
