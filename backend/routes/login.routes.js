import express from "express";
import { login, logout } from "../controllers/login.controller.js";

const router = express.Router();

// Route to handle user login
router.post("/login", login);

// Route to handle user logout
router.post("/logout", logout);

export default router;
