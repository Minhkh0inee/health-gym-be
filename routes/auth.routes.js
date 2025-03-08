const express = require('express')
const authController = require('../controller/auth.controller')
const authRouter = express.Router()


authRouter.post('/signup', authController.register)
authRouter.post('/signin', authController.signIn)

module.exports = authRouter