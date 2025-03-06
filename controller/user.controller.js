const userService = require('../service/user.service')
const { successResponse, errorResponse } = require('../utils/response/responseHandler')

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUser()
            successResponse(res, users, "Users retrieving successfully", 200)
        }catch(err){
            errorResponse(res, err, err.message, 500)
        }
    }

    async createUser(req, res) {
        try {
            const newUser = await userService.createUser(req.body)
            successResponse(res, newUser, "User created successfully", 201)
        } catch (err) {
            errorResponse(res, err, err.message, 400)
        }
    }
}

module.exports = new UserController()