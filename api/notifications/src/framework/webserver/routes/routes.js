const notifRoutes = require('./notifRoutes')

module.exports = (app, sequelize) => {
  // notifRoutes(app, sequelize)
  app.use('/api/v1/notifications', notifRoutes(sequelize))
}
