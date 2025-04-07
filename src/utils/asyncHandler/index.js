const ApiResponse = require("../apiResponse");

const asyncHandlerWrapper = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    return res.json(
        ApiResponse.internalServerError("Internal Server Error", error.message)
    )
  }
};

module.exports = asyncHandlerWrapper;
