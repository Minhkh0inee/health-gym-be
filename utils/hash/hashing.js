const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hashingPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds)
    return await bcrypt.hash(password, salt)
}

exports.compareHashing = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword)
}