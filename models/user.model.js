const mongoose = require('mongoose')

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    }
})


const User = model('User', userSchema)

module.exports = User
