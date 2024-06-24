import userModel from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getUserForSidebar = catchAsync(async (req, res, next) => {
  const loggedInId = req.user._id;
  const users = await userModel
    .find({ _id: { $ne: loggedInId } })
    .select("-password");

  res.status(200).json({
    status: "success",
    users,
  });
});
