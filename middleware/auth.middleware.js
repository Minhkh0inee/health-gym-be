const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const createError = (statusCode, message) => ({
  status: "error",
  statusCode,
  message,
});

exports.verifyUserToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json(createError(401, "No authorization header found"));
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res
        .status(401)
        .json(
          createError(
            401,
            "Authorization format invalid. Format: Bearer <token>"
          )
        );
    }

    const token = parts[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json(createError(401, "Token has expired"));
    }
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      iat: decoded.iat,
      exp: decoded.exp,
    };
   return next();


  } catch (err) {
    if (err) {
      return res.status(401).json(createError(401, "Invalid token"));
    }

    if (err) {
      return res.status(401).json(createError(401, "Token has expired"));
    }

    return res
      .status(500)
      .json(createError(500, "Internal server error during authentication"));
  }
};

exports.isAdmin = (req, res, next) => {
    if(req.user.role === 'admin'){
      return next()
    }

    return res.status(401).json(createError(401, "Unauthorized!"));
 
}
