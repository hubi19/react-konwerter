import React, { useState, useEffect } from "react";
import DistanceConverter from "./components/distanceConverter";
import TemperatureConverter from "./components/temperatureConverter";
import CurrencyConverter from "./components/currencyConverter";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.background = darkMode ? "#444" : "#e0e0e0"; // Zmiana tła strony
  }, [darkMode]);

  return (
    <>
      <div className="app-container">
        <div className="converters-container">
          <TemperatureConverter darkMode={darkMode} />
          <DistanceConverter darkMode={darkMode} />
          <CurrencyConverter darkMode={darkMode} />
        </div>
      </div>

      {/* Przycisk zmiany motywu */}
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Jasny Tryb" : "🌙 Ciemny Tryb"}
      </button>
    </>
  );
}

export default App;
