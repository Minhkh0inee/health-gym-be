const express = require('express')
const router = express.Router()
const userRoute = require('../routes/user/user.route')

router.use('/', [userRoute])

module.exports = router;