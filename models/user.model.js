const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type:String,
        require: true, 
        unique: true
    },
    password: {
        type:String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    avatarUrl: {
        type: String,
        require:true,
        default: "ImgAvatar"
    }
}, {timestamps: true})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel