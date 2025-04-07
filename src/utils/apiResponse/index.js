class ApiResponse {
  constructor(
    statusCode,
    message,
    data = null,
    success = statusCode >= 200 && statusCode < 300
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = success;
  }
  static success(message, data = null) {
    return new ApiResponse(200, message, data);
  }
  static created(message, data = null) {
    return new ApiResponse(201, message, data);
  }
  static error(message, data = null) {
    return new ApiResponse(500, message, data);
  }
  static badRequest(message, data = null) {
    return new ApiResponse(400, message, data);
  }
  static unauthorized(message, data = null) {
    return new ApiResponse(401, message, data);
  }
  static forbidden(message, data = null) {
    return new ApiResponse(403, message, data);
  }
  static notFound(message, data = null) {
    return new ApiResponse(404, message, data);
  }
  static internalServerError(message, data = null) {
    return new ApiResponse(500, message, data);
  }
  static serviceUnavailable(message, data = null) {
    return new ApiResponse(503, message, data, success);
  }
}


module.exports = ApiResponse;
