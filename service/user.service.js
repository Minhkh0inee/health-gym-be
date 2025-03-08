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

  async findUserById(userId){
    try{
      const userExist = await UserModel.findById(userId)
      if(!userExist) {
        throw new Error(`User with ${userId} not found`)
      }
      return userExist
    }catch(err){
      throw new Error(err)
    }
  }

  async updateUserById(userId, newData){
    try{
      const userUpdate = UserModel.findByIdAndUpdate(userId, newData, {new: true})
      if (!userUpdate) {
        throw new Error(`User with ${userId} found`);
      }
      return userUpdate
    }catch(err){
      throw new Error(err)
    }
  }

  async deleteUserById(userId){
    try{
      const userDeleted = UserModel.findByIdAndDelete(userId)
      if (!userDeleted) {
        throw new Error(`User with ${userId} found`);
      }
      return userDeleted
    }catch(err){
      throw new Error(err)
    }
  }
}

module.exports = new UserService();
