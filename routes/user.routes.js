const express = require('express')
const userController = require('../controller/user.controller')

const router = express.Router()

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)

module.exports = router