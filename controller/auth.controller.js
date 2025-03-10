const authService = require("../service/auth.service");
const {
  successResponse,
  errorResponse,
} = require("../utils/response/responseHandler");

class AuthController {
  async register(req, res) {
    try {
      const registedUser = await authService.register(req.body);
      return successResponse(res, registedUser, "Registered User successfully", 201);
    } catch (err) {
      return errorResponse(res, err, err.message, 400);
    }
  }

  async signIn(req, res) {
    try {
      const signIn = await authService.signIn(req.body);
      return successResponse(res, signIn, "Sign In successfully", 200);
    } catch (err) {
      return errorResponse(res, err, err.message, 400);
    }
  }
}

module.exports = new AuthController();
