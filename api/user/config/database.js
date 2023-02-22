const { Sequelize } = require("sequelize");
const db_env = process.env.APP_ENV || development;
const db_config = require("../frameworks/database/" +
  process.env.DB_CONNECTION +
  "/config.json");
console.log(db_config.db_env);

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    /* 'database', 'username', 'password' */ host: "localhost",
    dialect:
      process.env.DB_CONNECTION /*mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    operatorsAliases: 0,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

db.authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = db;
