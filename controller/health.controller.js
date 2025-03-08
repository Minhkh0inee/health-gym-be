const healthService = require('../service/health.service')
const { errorResponse, successResponse } = require('../utils/response/responseHandler')

class HealthController{
    async createUserHealth(req, res) {
        try {
    
            const {userId, healthData} = req.body
            const newUserHealth = await healthService.create(userId,healthData)
            successResponse(res, newUserHealth, `Health of user ${userId} created successfully`, 201)
        }catch(err){
            errorResponse(res, err, err.message, 400)
        }
    }

    async getUserHealth(req, res) {
        try{
            const {userId} = req.params
            const userHealth= await healthService.getAll(userId)
            successResponse(res, userHealth, `Health of user ${userId} retrivied successfully`, 200)
        }catch(err){
            errorResponse(res, err, err.message, 400)
        }
    }

    async getUserHealthDetail(req, res) {
        try{
            const {userId, id} = req.params
            const userHealth= await healthService.getOne(userId, id)
            successResponse(res, userHealth, `Health with ${id} of user ${userId} retrivied successfully`, 200)
        }catch(err){
            errorResponse(res, err, err.message, 400)
        }
    }

    async updateHealthDetail(req, res) {
        try{
            const {userId, id} = req.params
            const {healthData} = req.body
            const userHealth= await healthService.updateById(userId, id, healthData)
            successResponse(res, userHealth, `Health with ${id} of user ${userId} updated successfully`, 200)
        }catch(err){
            errorResponse(res, err, err.message, 400)
        }
    }

    async deleteHealth(req, res) {
        try{
            const {userId, id} = req.params
            const userHealth= await healthService.deleteById(userId, id)
            successResponse(res, userHealth, `Health with ${id} of user ${userId} deleted successfully`, 200)
        }catch(err){
            errorResponse(res, err, err.message, 400)
        }
    }
}

module.exports = new HealthController()