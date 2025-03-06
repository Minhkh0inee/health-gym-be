const express = require("express");
const router = express.Router();
const userController = require("../../controller/user/user.controller");

router.route("/v1/user").get(userController.getAllUser);
router.route("/v1/user-postgres").get(userController.getAllUserPostgres);
module.exports = router;
