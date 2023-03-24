import React from "react";
import './App.css';
import pic1 from "./images/image 1.png";

const Container2 = ()=>{
    return(
        <>
       <input className="searchbox" placeholder="searchbox"/>
       <img src={pic1} className="pic1"/>
        </>
    )
}
export default Container2;