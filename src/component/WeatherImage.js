import React from "react";
import './App.css';
import {Link} from "react-router-dom";

const WeatherImage = ({ weatherData }) => {
  return (
    <div
      className="myimage"
    >
      <div className="header">
        <p>Home</p>
        <p>cities</p>
        <p>News</p>
    </div>
      <div className="rectangle2">
        <div className="weatherdetailse">
      <h2>Weather Details</h2>
      <p>Cloudy : {weatherData.current.clouds} %</p>
      <p>Humidity : {weatherData.current.humidity} %</p>
      <p>Wind : {weatherData.current.wind_speed} km/h</p>
    </div>
      </div>
      <h1 className="temperatre">{weatherData.current.temp}°C</h1>
    </div>
  );
};

export default WeatherImage;
