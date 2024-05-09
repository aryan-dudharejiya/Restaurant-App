import Login from "../models/login.model.js";

// Controller to handle user login
export const login = async (req, res) => {
  try {
    const { fullName, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    // Create a new login instance
    const newLogin = new Login({
      fullName,
      password,
    });

    // Save the new login to the database
    await newLogin.save();

    // Respond with details of the new login
    res.status(201).json({
      _id: newLogin._id,
      fullName: newLogin.fullName,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to handle user logout
export const logout = (req, res) => {
  try {
    // Respond with success message upon logout
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
