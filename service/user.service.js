const UserModel = require("../models/user.model");

class UserService {
  async getAllUser() {
    try {
      const users = await UserModel.find();
      return users;
    } catch (err) {
      throw new Error("Error fetching users");
    }
  }

  async createUser(body) {
    try {
      const existUser = await UserModel.findOne({ email: body.email });
      if (existUser) {
        throw new Error("Email is already exist!");
      }
      const newUser = new UserModel(body);
      await newUser.save();
      return newUser;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new UserService();
