const cors = require('cors')
const rateLimit = require('express-rate-limit')
const express = require('express')

module.exports = function expressConifg(app) {
  // cors
  app.use(cors())

  // rate limit
  app.use(
    '/api',
    rateLimit({
      max: 100, //100 request
      windowMs: 60 * 60 * 1000, //per jam
      message: 'To many request from this IP, please try again in an hour',
    })
  )

  // body parser
  app.use(express.json({ limit: '15kb' }))
  app.use(express.urlencoded({ extended: true, limit: '15kb' }))
}
