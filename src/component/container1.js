import React from "react";
import './App.css';
import img1 from "./images/Rectangle 7.jpg";
import img2 from "./images/Rectangle 9.png";
import img3 from "./images/Rectangle 12.png";
const Container1 = ({ weatherData })=>{
    return(
        <>
        <div className="cities">
            <p>Cities</p>
            <div className="allbox">
            <div className="citiesbox1">
                <img src={img1}/>
                <p>{weatherData.current.temp}°C</p>
      <p>{weatherData.current.humidity} %</p>
      <p>{weatherData.current.wind_speed} km/h</p>
                </div>
                <div className="citiesbox2">
                <img src={img2}/>
                <p>{weatherData.current.temp}°C</p>
      <p>{weatherData.current.humidity} %</p>
      <p>{weatherData.current.wind_speed} km/h</p>
                </div>
                <div className="citiesbox3">
                <img src={img2}/>
                <p>{weatherData.current.temp}°C </p>
      <p>{weatherData.current.humidity} %</p>
      <p>{weatherData.current.wind_speed} km/h</p>
                </div>
            </div>
            </div>
        </>
    )
}
export default Container1;