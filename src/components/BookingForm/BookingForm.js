import React, { useState } from "react";
import "./booking-form.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const defaultAvailableTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes, setAvailableTimes] = useState(defaultAvailableTimes);

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Reservation successfully made!", {
      position: "top-center",
    });

    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
    setAvailableTimes(defaultAvailableTimes);

    console.log({ date, time, guests, occasion });
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          min="1"
          max="10"
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          className="submit-button"
          type="submit"
          value="Make Your reservation"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
