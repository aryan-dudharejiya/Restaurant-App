import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import reservationImage from "../assets/reservation.png";
import Footer from "../components/Footer";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccessMessage("");
      return;
    }

    // Check if any required field is empty
    if (!fullName || !password || !confirmPassword) {
      setError("Please fill in all the inputs");
      setSuccessMessage("");
      return;
    }

    try {
      // Send login request to the server
      const response = await axios.post("https://restaurant-app-nlgd.onrender.com/login", {
        fullName,
        password,
        confirmPassword,
      });

      // Set success message and handle login locally
      setSuccessMessage("Login successful! You are now logged in.");
      handleLogin(fullName);

      // Clear form fields and errors after successful login
      setFullName("");
      setPassword("");
      setConfirmPassword("");
      setError("");

      // Redirect to home page after a brief delay
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      // Handle login failure
      console.error("Login failed!", error.message);
      setError("Login failed. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="login-container">
      {/* Login form section */}
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              {/* Image related to reservation */}
              <img
                src={reservationImage}
                className="img-fluid custom-img"
                alt="Reservation"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              {/* Login form */}
              <form onSubmit={handleSubmit}>
                {/* Full Name input */}
                <div className="form-outline mb-4">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {/* Confirm Password input */}
                <div className="form-outline mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                {/* Display error message if there's an error */}
                {error && <p className="text-danger">{error}</p>}
                {/* Display success message if login is successful */}
                {successMessage && (
                  <p className="text-success">{successMessage}</p>
                )}
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-lg btn-block custom-button"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

export default Login;
