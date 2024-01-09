const createResponse = (status, success, message, data) => {
  const response = {
    success,
    message,
  };

  if (data) {
    response.data = data;
  }

  return res.status(status).json(response);
};

export default createResponse;
