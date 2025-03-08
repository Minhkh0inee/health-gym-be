const userService = require("../service/user.service");
const {
  successResponse,
  errorResponse,
} = require("../utils/response/responseHandler");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUser();
      successResponse(res, users, "Users retrieving successfully", 200);
    } catch (err) {
      errorResponse(res, err, err.message, 500);
    }
  }

  async createUser(req, res) {
    try {
      const newUser = await userService.createUser(req.body);
      successResponse(res, newUser, "User created successfully", 201);
    } catch (err) {
      errorResponse(res, err, err.message, 400);
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.findUserById(id);
      successResponse(res, user, "User found successfully", 200);
    } catch (err) {
      errorResponse(res, err, err.message, 400);
    }
  }
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const userUpdated = await userService.updateUserById(id, req.body);
      successResponse(res, userUpdated, "User update successfully", 200);
    } catch (err) {
      errorResponse(res, err, err.message, 400);
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const userDeleted = await userService.deleteUserById(id, req.body);
      successResponse(res, userUpdated, "User delete successfully", 200);
    } catch (err) {
      errorResponse(res, err, err.message, 400);
    }
  }
}

module.exports = new UserController();
