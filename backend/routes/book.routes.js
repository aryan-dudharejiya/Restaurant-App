import express from "express";
import { getAllBookings, book } from "../controllers/book.controller.js";

const router = express.Router();

// Route to get all bookings
router.get("/bookings", getAllBookings);

// Route to book a new appointment
router.post("/book", book);

export default router;
