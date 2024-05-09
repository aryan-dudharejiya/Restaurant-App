import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./components/Navbar";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    // Simulate a delay of 2 seconds before signing out
    setTimeout(() => {
      setLoggedIn(false);
    }, 1000); // Delay of 2000 milliseconds (2 seconds)
  };

  // Custom hook to get the current location
  const LocationAwareNavbar = () => {
    const location = useLocation();

    // Show Navbar only on the home page ("/")
    if (location.pathname === "/", "/Team") {
      return <Navbar loggedIn={loggedIn} handleSignOut={handleSignOut} />;
    }

    return null; // Return null if Navbar is not needed
  };

  return (
    <BrowserRouter>
      {/* Conditionally render the Navbar based on route */}
      <LocationAwareNavbar />

      {/* Define routes inside the Routes component */}
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
