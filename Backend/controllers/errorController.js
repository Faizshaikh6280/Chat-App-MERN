export const globalErrorHandler = function (err, req, res, next) {
  console.log("Error💥", err);
  if (err.code === 11000) {
    return res.status(400).json({
      status: "fail",
      message: `${Object.keys(err.keyPattern)[0]} must be unique `,
    });
  }
  return res.status(400).json({
    status: "fail",
    message: err.message,
  });
};
