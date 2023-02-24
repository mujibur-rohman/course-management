const express = require('express');
const notifRepository = require('../../database/postgres/repositories/notifRepository')

module.exports = (sequelize) => {
  const router = express.Router();
  const notifRepo = notifRepository(sequelize)

  router.get('/', (req, res) => {
    notifRepo.findAll()
    
  })
  
  router.get('/:id', (req, res) => {

  })
  
  return router;
}
