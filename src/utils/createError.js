const createError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  error.isOperational = true;

  Error.captureStackTrace(error, createError);

  throw error;
};

export default createError;
