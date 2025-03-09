const express = require("express");
const userController = require("../controller/user.controller");
const { verifyUserToken, isAdmin } = require("../middleware/auth.middleware");

const userRouter = express.Router();

userRouter.get("/", verifyUserToken, isAdmin, userController.getAllUsers);
userRouter.post("/", userController.createUser);
userRouter.get("/:id", userController.getUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
