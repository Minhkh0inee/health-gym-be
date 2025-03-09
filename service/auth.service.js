const userService = require("../service/user.service");
const { hashingPassword, compareHashing } = require("../utils/hash/hashing");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SECRET = process.env.JWT_SECRET;
const JWT_EXPIRED = process.env.JWT_EXPIRED;

class AuthService {
  async register(newBody) {
    try {
      const hashedPassword = await hashingPassword(newBody.password);
      const newUserBody = {
        firstName: newBody.firstName.trim(),
        lastName: newBody.lastName.trim(),
        email: newBody.email,
        password: hashedPassword,
        age: newBody.age,
        dob: newBody.dob,
        avatarUrl: newBody.avatarUrl,
      };

      const registerUser = await userService.createUser(newUserBody);
      return registerUser;
    } catch (err) {
      throw new Error(err);
    }
  }
  async signIn(signInBody) {
    try {
      const { email, password } = signInBody;
      const userExisted = await userService.findUserByEmail(email);
      
      if (!userExisted) {
        throw new Error("Email is not registered!");
      }
  
      const isMatchPassword = await compareHashing(password, userExisted.password);
      if (!isMatchPassword) {
        throw new Error("Password invalid!");
      }
      let payload = { id: userExisted._id, email: userExisted.email, role: userExisted.role };
      const token = jwt.sign(payload, SECRET, { expiresIn: JWT_EXPIRED });
      const result = {
        payload,
        accessToken: token,
      };
  
      return result;
    } catch (err) {
      // Catching any error and throwing a response
      throw new Error(err.message || "An error occurred during sign-in.");
    }
  }
}

module.exports = new AuthService();
