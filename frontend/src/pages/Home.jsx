import React, { useState } from 'react';
import Hero from "../components/Hero"; // Import Hero component
import Menu from "../components/Menu"; // Import Menu component
import Qualities from "../components/Qualities"; // Import Qualities component
import Footer from '../components/Footer'; // Import Footer component

// Home component
const Home = ({ loggedIn }) => {
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message

  // Function to handle login action
  const handleLogin = () => {
    setAlertMessage("Login successful!"); // Set alert message
  };

  // Function to handle logout action
  const handleLogout = () => {
    setAlertMessage("Logout successful!"); // Set alert message
  };

  return (
    <div>
      {/* Display alert message if there's one */}
      {alertMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {alertMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertMessage("")}
          ></button>
        </div>
      )}

      {/* Render Hero component with login/logout handlers and logged-in status */}
      <Hero handleLogin={handleLogin} handleLogout={handleLogout} loggedIn={loggedIn} />
      {/* Render Menu component */}
      <Menu />
      {/* Render Qualities component */}
      <Qualities />
      {/* Render Footer component */}
      <Footer />
    </div>
  );
};

export default Home;
