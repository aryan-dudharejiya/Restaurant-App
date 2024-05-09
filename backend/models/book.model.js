import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookSchema);

export default Booking;
