import {
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controller/userController.js";

export default (router) => {
  router.post("/register", registerUser);
  router.post("/login", loginUser);
  router.post("/logout", logoutUser);
  router.route("/profile").get(getUserProfile).put(updateUserProfile);
};
