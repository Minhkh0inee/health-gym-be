const express = require('express')
const userController = require('../controller/user.controller')

const userRouter = express.Router()

userRouter.get('/', userController.getAllUsers)
userRouter.post('/', userController.createUser)
userRouter.get('/:id', userController.getUser)
userRouter.put('/:id', userController.updateUser)
userRouter.delete('/:id', userController.deleteUser)



module.exports = userRouter