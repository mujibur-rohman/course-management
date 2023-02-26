require("dotenv").config();
const { Sequelize } = require("sequelize");
const cookieParser = require("cookie-parser");
const express = require("express");
const useragent = require("express-useragent");
const index = require("./frameworks/webserver/routes");
const server = require("./frameworks/webserver/server");

//config_db
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require("../src/frameworks/database/" +
  process.env.DB_CONNECTION +
  "/config.json")[env];

// this is entry point looks like...

// configuration express etc...

const app = express();
app.use(useragent.express());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// For parsing application/json
app.use(express.json());

// cookie parser
app.use(cookieParser());

// Database Configuration...
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// routes...
index(app, sequelize, Sequelize.DataTypes);
server(app);

// error handling...
