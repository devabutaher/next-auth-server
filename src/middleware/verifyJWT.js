import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import asyncHandler from "./asyncHandler.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
  let token = req.cookies["auth-token"];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded._id).select("-password");

      return next();
    } catch (error) {
      return res.status(401).json("Not authorized, token failed");
    }
  } else {
    return res.status(401).json("Not authorized, no token");
  }
});

export default verifyJWT;
