import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:5000/country/${country}`
      );
      setCountryInfo(data);
      setWeatherInfo(null); // Clear weather info when new country is fetched
    } catch (error) {
      console.error("Error fetching country data", error);
    }
  };

  const fetchWeather = async () => {
    if (countryInfo && countryInfo.capital) {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/weather/${countryInfo.capital}`
        );
        setWeatherInfo(data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    }
  };

  return (
    <div>
      <h1>Country Information</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit" disabled={!country}>
          Submit
        </button>
      </form>

      {countryInfo && (
        <div className="box">
          <div className="text-left">
          <h2>{countryInfo.name.common}</h2>
          {countryInfo.flags && (
            <img
              src={countryInfo.flags.svg || countryInfo.flags.png}
              alt="flag"
              style={{ width: "100px" }}
            />
          )}
          </div>
          <div className="text-right">          
          <p>Capital: {countryInfo.capital[0]}</p>
          <p>Population: {countryInfo.population}</p>
          <p>Latitude/Longitude: {countryInfo.latlng.join(", ")}</p>
          </div>

           <div className="btn"> 
          <button onClick={fetchWeather} >Capital Weather</button>
          </div>
          
          </div>
      )}

      {weatherInfo && (
        <div>
          <h3>Weather in {weatherInfo.location.name}</h3>
          <img src={weatherInfo.current.condition.icon} alt="weather icon" />
          <p>Temperature: {weatherInfo.current.temp_c}°C</p>
          <p>Condition: {weatherInfo.current.condition.text}</p>
          
        </div>
      )}
    </div>
  );
}

export default App;
