const successResponse = (res, data, message = 'Request successful', statusCode = 200) => {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  };
  
  const errorResponse = (res, error, message = 'An error occurred', statusCode = 500) => {
    return res.status(statusCode).json({
      success: false,
      message,
      error: error.message || error,
    });
  };
  
  module.exports = { successResponse, errorResponse };