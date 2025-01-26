import React, { useState } from "react";
import "./currencyConverter.css";

function TemperatureConverter({ darkMode }) {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convertCtoF = (c) => (c !== "" ? (c * 9) / 5 + 32 : "");
  const convertFtoC = (f) => (f !== "" ? ((f - 32) * 5) / 9 : "");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value === "" ? "" : convertCtoF(value));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value === "" ? "" : convertFtoC(value));
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h2>Temperatura</h2>

      <label>
        Celsjusz:
        <input type="number" value={celsius} onChange={handleCelsiusChange} placeholder="°C" />
      </label>

      <label>
        Fahrenheit:
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} placeholder="°F" />
      </label>
    </div>
  );
}

export default TemperatureConverter;
