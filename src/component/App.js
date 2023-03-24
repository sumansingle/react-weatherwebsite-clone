
import './App.css';
import React, { useState, useEffect } from "react";
import WeatherImage from "./WeatherImage";
import Container1 from './container1';
import Container2 from './container2';
import Container3 from './container3';
import Footer from './Footer.js';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "49cc8c821cd2aff9af04c9f98c36eb74";
  const latitude = 22.415279; // replace with the latitude of your location
  const longitude = 87.325317; // replace with the longitude of your location

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, [latitude, longitude]);

  return (
    <div>
      {weatherData && (
        <div className="container">
          <WeatherImage weatherData={weatherData}/>
          <Container1 weatherData={weatherData}/>
          <Container2/>
          <Container3/>
          <Footer/>
        </div>
      )}
    </div>
  );
};

export default App;
