const authController = require("../../../adapter/controllers/auth-controller");

const authRoute = (router, roleRepo, permissionRepo) => {
  // load controller with dependencies
  const controller = authController();

  // POST enpdpoints
  router.route("/").get(function (req, res, next) {
    console.log("Router Working");
    res.end();
  });

  return router;
};

module.exports = authRoute;
