import { useState } from 'react';

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


export default function Weather(){
    const [weatherInfo , setWeatherInfo] = useState({
        city:"delhi",
        humidity: 43,
        temp: 33.23,
        tempMax: 33.73,
        tempMin: 33.23,
        weather: "light thunderstorm",
        windspeed: 9.26,
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h1>Search weather of your Location </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
        

}