import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";
import { red } from "@mui/material/colors";


export default function SearchBox({updateInfo}) {

   let [city , setCity] = useState("");
   let [err , setErr] = useState(false);

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_Key = "a5419472e5980104eebc2fc1eacdb555";

   let getWeatherInfo =  async() => {

     try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
      let jsonresponse = await response.json();
      console.log(jsonresponse);
  
      let result = {
        city:city,
        temp: jsonresponse.main.temp,
        tempMax: jsonresponse.main.temp_max,
        tempMin: jsonresponse.main.temp_min,
        humidity: jsonresponse.main.humidity,
        windspeed: jsonresponse.wind.speed,
        weather: jsonresponse.weather[0].description,
  
      };
      console.log(result);
      return result;
    }catch(err){
      throw err;
     }

  
  };

   let handleChange = (evt)=>{
    setCity(evt.target.value);
    setErr(false);
   }

   let handleSubmit = async (evt)=> {
    try{
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);

    }catch(err){
      setErr(true);
    }   

   }

  return (
    <>
      <div className="Search">
      
        <form onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="Search city "
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
          />
          <br></br><br></br>
          <Button variant="contained" type="submit" color="success">
            search
          </Button>

          {err &&<p style={{color:"red"}}>No such place in our API Data exits!</p> }
        </form>
      </div>
    </>
  );
}
