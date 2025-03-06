const User = require('../../models/user.model')
const UserPostgres = require('../../models/excercise.model')

exports.getAllUser = async (req,res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(404).json({message: "Cannot find users list"})
    }
}

exports.getAllUserPostgres = async (req,res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(404).json({message: "Cannot find users list"})
    }
}