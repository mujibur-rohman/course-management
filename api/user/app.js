const express = require("express");
const app = express();
const router = express.Router();

const db = require("./frameworks/database/mysql/models/index");

app.use(router);

router.get("/", function (req, res, next) {
  console.log("Router Working");
});

module.exports = app;
