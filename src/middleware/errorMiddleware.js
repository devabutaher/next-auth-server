const notFound = (req, res, next) => {
  const error = res.status(404).json(`Route not found ${req.originalUrl}`);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  // If Mongoose not found error
  if (err.name === "CastError" && err.kind === "ObjectId") {
    status = 404;
    message = "Resource not found";
  }

  res.status(customStatus).json({
    message: customMessage,
    stack: process.env.NODE_ENV !== "production" && err.stack,
  });
};

export { errorHandler, notFound };

/*
Success
200 OK
201 Created

Error
400	Bad Request
401	Unauthorized
403	Forbidden  
404	Not Found
500	Internal Server Error
*/
