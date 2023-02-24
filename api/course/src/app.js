const config = require("./config/config");
const { Sequelize } = require("sequelize");
const express = require("express");
const routes = require('./framework/webserver/routes/routes')
const server = require('./framework/webserver/server')
require("dotenv").config()

// this is entry point looks like...

// configuration express etc...

const app = express();

// Database Configuration...

const sequelize = new Sequelize({
    host: config.mariadb.host,
    username: config.mariadb.username,
    password: config.mariadb.password,
    database: config.mariadb.dbname,
    dialect: "postgres",
});

// routes...
routes(app, sequelize);
server(app)

// error handling...

module.exports = app;
