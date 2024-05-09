import React, { useState } from "react";
import axios from "axios";

const Reservation = () => {
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number format
    if (number.length !== 10) {
      setError("Invalid phone number. Please enter a 10-digit number.");
      setSuccessMessage("");
      return;
    }

    // Check if all required fields are filled
    if (!fullName || !date || !time || !number) {
      setError("Please fill in all the inputs.");
      setSuccessMessage("");
      return;
    }

    try {
      // Check if user has already registered for the same date and time
      if (fullName && date === fullName && date) {
        setError("You have already registered for this date and time.");
        setSuccessMessage("");
        return;
      }

      // Send reservation request to the server
      const response = await axios.post("http://localhost:5000/book", {
        fullName,
        date,
        time,
        number,
      });

      // Set success message upon successful reservation
      setSuccessMessage("Reservation successful!");
    } catch (error) {
      // Handle reservation failure
      console.error("Reservation failed!", error.message);
      setError("Reservation failed. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="book">
      {/* Reservation form section */}
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <div className="card-body p-4 p-md-5">
                  {/* Form title */}
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                    Reservation
                  </h3>

                  {/* Reservation form */}
                  <form className="px-md-2" onSubmit={handleSubmit}>
                    {/* Full Name input */}
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    {/* Date and Time inputs */}
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="form-control"
                          placeholder="Date"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="time"
                          className="form-control"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          placeholder="Time"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Number input */}
                    <div className="form-outline mb-4">
                      <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    {/* Display error message if there's an error */}
                    {error && <p className="text-danger">{error}</p>}
                    {/* Display success message if reservation is successful */}
                    {successMessage && (
                      <p className="text-success">{successMessage}</p>
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-lg mb-3 custom-button"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
