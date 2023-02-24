const notifRoutes = require('./notifRoutes')

module.exports = (app, sequelize) => {
  app.use('/api/v1/notifications', (req, res, next) => {
    return res.json({ test: 'test' })
  })
}
