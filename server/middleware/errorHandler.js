const { ValidationError, AuthenticationError } = require("../utils/errors");

function errorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(400).json({ error: err.message });
  }

  if (err instanceof AuthenticationError) {
    return res.status(401).json({ error: err.message });
  }

  res.status(500).json({ error: "An unexpected error occurred" });
}

module.exports = errorHandler;
