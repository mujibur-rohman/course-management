require("dotenv").config();
const { Sequelize } = require("sequelize");
const express = require("express");
const routes = require("./frameworks/webserver/routes");
const server = require("./frameworks/webserver/server");
const index = require("./frameworks/webserver/routes/index");

//config_db
const process = require("process");
const env = process.env.NODE_ENV || "development";
const config = require("../src/frameworks/database/" +
  process.env.DB_CONNECTION +
  "/config.json")[env];

// this is entry point looks like...

// configuration express etc...

const app = express();

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
routes(app, sequelize, Sequelize.DataTypes);
server(app);

// error handling...
