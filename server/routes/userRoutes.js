const express = require("express");
// userRoutes is an instance of the express router. We use it to define our routes.
const userRoutes = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  test,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// when we hit the below urls, call the relevant controller function
userRoutes.post("/", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/me", protect, getMe);
userRoutes.get("/test", test);

module.exports = userRoutes;
