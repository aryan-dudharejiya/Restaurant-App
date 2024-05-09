import Book from "../models/book.model.js";

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Book.find(); // Retrieve all bookings
    res.status(200).json(bookings); // Respond with bookings
  } catch (error) {
    console.log("Error:", error.message); // Log and handle errors
    res.status(500).json({ error: "Internal Server Error" }); // Send error response
  }
};

// Create a new booking
export const book = async (req, res) => {
  try {
    const { fullName, number, date, time } = req.body; // Extract required fields

    // Check for required fields
    if (!fullName || !number || !date || !time) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    // Check if slot is already booked
    const existingBooking = await Book.findOne({ date, time });
    if (existingBooking) {
      return res.status(400).json({ error: "Slot already taken" });
    }

    // Create new booking and save to database
    const newBooking = new Book({ fullName, number, date, time });
    await newBooking.save();

    // Respond with details of new booking
    res.status(201).json({
      _id: newBooking._id,
      fullName: newBooking.fullName,
      date: newBooking.date,
      time: newBooking.time,
    });
  } catch (error) {
    console.log("Error:", error.message); // Log and handle errors
    res.status(500).json({ error: "Internal Server Error" }); // Send error response
  }
};
