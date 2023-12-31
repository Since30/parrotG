const express = require("express");
const {
  authController,
  createAdminAccount,
} = require("../../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/check-auth-status", authController.checkAuthStatus);

module.exports = router;
