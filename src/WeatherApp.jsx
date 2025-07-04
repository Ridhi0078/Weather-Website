import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 21.7,
        humidity: 20,
        temp: 22.84,
        tempMax: 23.05,
        tempMin: 22.84,
        weather: "haze",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App By Ridhima</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}