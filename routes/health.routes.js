const healthController = require('../controller/health.controller')
const express = require('express')
const healthRouter =  express.Router()

healthRouter.post('/', healthController.createUserHealth)
healthRouter.get('/:userId', healthController.getUserHealth)
healthRouter.get('/:userId/:id', healthController.getUserHealthDetail)
healthRouter.put('/:userId/:id', healthController.updateHealthDetail)
healthRouter.delete('/:userId/:id', healthController.deleteHealth)

module.exports = healthRouter