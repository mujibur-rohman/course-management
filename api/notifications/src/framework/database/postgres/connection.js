const { Sequelize } = require('sequelize')

module.exports = (config) => {
  const sequelize = new Sequelize({
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.name,
    dialect: config.db.dialect,
  })

  sequelize
    .authenticate()
    .then(() => {})
    .catch((err) => {
      console.log(err)
    })

  return sequelize
}
