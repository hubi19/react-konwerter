import React, { useState } from "react";
import "./currencyConverter.css";

function DistanceConverter({ darkMode }) {
  const [miles, setMiles] = useState("");
  const [kilometers, setKilometers] = useState("");

  const convertMilesToKm = (m) => (m !== "" ? m * 1.60934 : "");
  const convertKmToMiles = (km) => (km !== "" ? km / 1.60934 : "");

  const handleMilesChange = (e) => {
    const value = e.target.value;
    setMiles(value);
    setKilometers(value === "" ? "" : convertMilesToKm(value));
  };

  const handleKilometersChange = (e) => {
    const value = e.target.value;
    setKilometers(value);
    setMiles(value === "" ? "" : convertKmToMiles(value));
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h2>Dystans</h2>

      <label>
        Mile:
        <input type="number" value={miles} onChange={handleMilesChange} placeholder="mi" />
      </label>

      <label>
        Kilometry:
        <input type="number" value={kilometers} onChange={handleKilometersChange} placeholder="km" />
      </label>
    </div>
  );
}

export default DistanceConverter;
