const mongoose = require("mongoose");
const { types } = require("pg");
const { Schema } = mongoose;

const userRole = ['admin', 'user']

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
      required: true
      
    },
    avatarUrl: {
      type: String,
      required: true,
      default: "ImgAvatar",
    },
    healthData: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Health", // Reference to the Health schema
      },
    ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
