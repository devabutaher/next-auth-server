import express from "express";
import {
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controller/userController.js";
import verifyJWT from "../middleware/verifyJWT.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);
router
  .route("/profile")
  .get(verifyJWT, getUserProfile)
  .put(verifyJWT, updateUserProfile);

export default router;
