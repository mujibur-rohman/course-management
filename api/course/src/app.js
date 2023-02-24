const config = require("./config/config");
const { Sequelize } = require("sequelize");
const express = require("express");
const routes = require('./frameworks/webserver/routes/routes')
const server = require('./frameworks/webserver/server')
require("dotenv").config()

// this is entry point looks like...

// configuration express etc...

const app = express();

// Database Configuration...

const sequelize = new Sequelize({
    host: config.database.host,
    username: config.database.username,
    password: config.database.password,
    database: config.database.dbname,
    dialect: "postgres",
});

// routes...
routes(app, sequelize);
server(app)

// error handling...

module.exports = app;
