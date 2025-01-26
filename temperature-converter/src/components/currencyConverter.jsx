import React, { useState, useEffect } from "react";
import "./currencyConverter.css";

function CurrencyConverter({ darkMode }) {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [conversionRate, setConversionRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencies = ["USD", "EUR", "GBP", "PLN", "JPY", "AUD"];

  const fetchConversionRate = async () => {
    const apiKey = "f173196f9d917c8cdaeb8d05";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const rate = data.conversion_rates[toCurrency];
      setConversionRate(rate);
    } catch (error) {
      console.error("Błąd pobierania danych o kursach walut:", error);
    }
  };

  const convertCurrency = () => {
    if (conversionRate !== null && amount !== "") {
      setConvertedAmount((amount * conversionRate).toFixed(2));
    }
  };

  useEffect(() => {
    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h2>Waluty</h2>
      <div>
        <label>
          Kwota:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Kwota"
          />
        </label>
      </div>

      <div>
        <label>
          Z waluty:
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Na walutę:
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <button onClick={convertCurrency}>Przelicz</button>
      </div>

      {convertedAmount && (
        <div>
          <h3>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </h3>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
