import express from "express";
import {
  registerUser,
  loginUser,
  updateUserProfile,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.put("/user/update/:userId", updateUserProfile);

export default router;
