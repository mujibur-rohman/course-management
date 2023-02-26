const passport = require("passport");
const authController = require("../../../adapter/controllers/auth-controller");
const express = require("express");
const router = express.Router();

const authRoute = (sequelize, DataTypes) => {
  const controller = authController(sequelize, DataTypes);
  router.get(
    "/tes-passport",
    passport.authenticate("bearer", { session: false }),
    async (req, res) => {
      console.log("berhasil");
      res.json({ message: "berhasil" });
    }
  );
  router.post("/login", controller.login);

  return router;
};

module.exports = authRoute;
