export const notFound = (req, res, next) => {
  const error = res.status(404).json(`Route not found ${req.originalUrl}`);
  return next(error);
};

export const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  const response = {
    message: message,
  };

  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  return res.status(status).json(response);
};
