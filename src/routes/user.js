import express from "express";

// CONTROLLERS ROUTES
import authController from "../controllers/auth.js";

// AUTH
const authRouter = express.Router();
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export default {
  authRouter,
};
