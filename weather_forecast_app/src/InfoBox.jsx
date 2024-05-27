
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"




export default function InfoBox({info}){

  let hot_url = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?b=1&s=170667a&w=0&k=20&c=8ijy1ixq0ALEpJIt9D4ElKJzayexgzXTDG2ZRCYVfHQ=";
  let cold_url = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";
  let rain_url = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    return (

    <div className="InfoBox">
    <div className="InfoCard">

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80 ? rain_url : info.temp>15 ? hot_url : cold_url
        }
      
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {
           info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <SevereColdIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>TempMaximum = {info.tempMax}&deg;C</p>
          <p>TempMinimum = {info.tempMin}&deg;C</p>
          <p>Humidity    = {info.humidity}</p>
          <p>Windspeed   = {info.windspeed}</p>
        
        </Typography>
      </CardContent>
    
    </Card>

  
    </div>

    </div>

    
   );
}