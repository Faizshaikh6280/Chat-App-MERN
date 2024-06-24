import json from "jsonwebtoken";
import catchAsync from "../utils/catchAsync.js";
import { AppError } from "../utils/AppError.js";
import userModel from "../models/userModel.js";
const signToken = (id) =>
  json.sign({ id }, process.env.JSON_SECRET, {
    expiresIn: process.env.JSON_EXPIRE_TIME,
  });

const createSignToken = function (user, res, statusCode) {
  const token = signToken(user._id);

  const cookieOption = {
    expires: new Date(
      Date.now() + process.env.JSON_EXPIRE_IN * 24 * 60 * 60 * 1000
    ),
    sameSite: "strict",
    httpsOnly: true, // prevent XSS attacts cros side scripting attacks.
  };

  if (process.env.NODE_ENVIROMENT === "production") {
    cookieOption.secure = true;
  }

  res.cookie("jwt", token, cookieOption);

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

const login = catchAsync(async (req, res, next) => {});

const signup = catchAsync(async (req, res, next) => {
  const { fullname, username, gender, password, confirmPassword } = req.body;

  if (!confirmPassword)
    return next(new AppError("Confirm Password is missing", 400));

  if (password !== confirmPassword) {
    return next(new AppError("Password does not match", 400));
  }

  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

  // create user
  const user = await userModel.create({
    fullname,
    username,
    gender,
    password,
  });

  if (user) {
    user.profilePic = user.gender === "male" ? boyProfilePic : girlProfilePic;
    await user.save({
      validateBeforeSave: false,
    });
  }
  createSignToken(user, res, 201);
});

const logout = () => {
  console.log("logout");
  res.send("logout");
};

export default { login, signup, logout };
