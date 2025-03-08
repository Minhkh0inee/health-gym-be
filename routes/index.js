const express = require('express')
const userRoutes = require('./user.routes')
const healthRoutes = require('./health.routes')
const authRouter = require('./auth.routes')
const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRoutes)
router.use('/health', healthRoutes)

module.exports = router