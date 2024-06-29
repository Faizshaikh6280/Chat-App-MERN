import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";
import userModel from "../models/userModel.js";

const protectRoute = async function (req, res, next) {
  // Get Token
  const token = req.cookies.jwt;
  if (!token) {
    return next(new AppError("You don't have permission to this route", 403));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) return next(new AppError("Invalid Token", 401));

  const user = await userModel.findById(decoded.id).select("-password");
  if (!user) return next(new AppError("User not found", 404));

  req.user = user;
  next();
};

export default protectRoute;
