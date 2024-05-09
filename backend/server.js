import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import loginRoutes from "./routes/login.routes.js";
import bookRoutes from "./routes/book.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000;

app.use(express.json()); // Parse JSON bodies in requests
app.use(cookieParser()); // Parse cookies
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use("/", loginRoutes); // Mount login routes
app.use("/", bookRoutes); // Mount book routes

// Define a default route
app.get("/", (req, res) => {
  res.send("This is our restaurant app");
});

// Start the server
app.listen(PORT, () => {
  connectToMongoDB(); // Connect to MongoDB
  console.log(`Server Running on port ${PORT}`);
});
