const HealthModel = require("../models/health.model");
const UserModel = require("../models/user.model");

class HealthService {
  async create(userId, newBody) {
    try {
      const userExist = await UserModel.findById(userId);
      if (!userExist) {
        throw new Error(`User with ${userId} not found`);
      }

      // Validate input data
      if (!newBody.weight || !newBody.height || !newBody.bodyFatPercentage) {
        throw new Error("Missing required health data");
      }

      const newHealthBody = {
        userId,
        weight: newBody.weight,
        height: newBody.height,
        bodyFatPercentage: newBody.bodyFatPercentage,
      };

      const newHealthData = new HealthModel(newHealthBody);
      await newHealthData.save();

      await UserModel.findByIdAndUpdate(
        userId,
        { $push: { healthData: newHealthData._id } },
        { new: true }
      );

      return newHealthData;
    } catch (err) {
      throw new Error(`Failed to create health record: ${err.message}`);
    }
  }

  async getAll(userId) {
    try {
      const userExist = await UserModel.findById(userId);
      if (!userExist) {
        throw new Error(`User with ${userId} not found`);
      }

      const userHealth = await HealthModel.find({ userId }).sort({
        createdAt: -1,
      });
      return userHealth;
    } catch (err) {
      throw new Error(`Failed to fetch health records: ${err.message}`);
    }
  }

  async getOne(userId, healthId) {
    try {
      const userExist = await UserModel.findById(userId);
      if (!userExist) {
        throw new Error(`User with ${userId} not found`);
      }

      const healthRecord = await HealthModel.findOne({
        _id: healthId,
        userId: userId,
      });

      if (!healthRecord) {
        throw new Error(`Health record not found or doesn't belong to user`);
      }

      return healthRecord;
    } catch (err) {
      throw new Error(`Failed to fetch health record: ${err.message}`);
    }
  }

  async updateById(userId, healthId, updatedBody) {
    try {
      const userExist = await UserModel.findById(userId);
      if (!userExist) {
        throw new Error(`User with ${userId} not found`);
      }

      const healthExist = await HealthModel.findOne({
        _id: healthId,
        userId: userId,
      });

      if (!healthExist) {
        throw new Error(`Health record not found or doesn't belong to user`);
      }

      const updatedHealth = await HealthModel.findByIdAndUpdate(
        healthId,
        updatedBody,
        { new: true, runValidators: true }
      );

      return updatedHealth;
    } catch (err) {
      throw new Error(`Failed to update health record: ${err.message}`);
    }
  }

  async deleteById(userId, healthId) {
    try {
      const userExist = await UserModel.findById(userId);
      if (!userExist) {
        throw new Error(`User with ${userId} not found`);
      }

      const healthExist = await HealthModel.findOne({
        _id: healthId,
        userId: userId,
      });

      if (!healthExist) {
        throw new Error(`Health record not found or doesn't belong to user`);
      }

      await HealthModel.findByIdAndDelete(healthId);

      // Remove health record reference from user
      await UserModel.findByIdAndUpdate(userId, {
        $pull: { healthData: healthId },
      });

      return { message: "Health record deleted successfully" };
    } catch (err) {
      throw new Error(`Failed to delete health record: ${err.message}`);
    }
  }
}

module.exports = new HealthService();
