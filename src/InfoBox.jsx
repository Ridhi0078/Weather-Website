import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }){
    const INIT_URL="https://media.istockphoto.com/id/1708420153/photo/sierra-cucapah-and-laguna-salada-view-from-3-km-de-altura-mexicali-baja-california-mexico.jpg?s=612x612&w=0&k=20&c=awPk3wxG9ZD9T4pE12hKIjJtVq6buA9UtSFBk8TNzuY=";
    const HOT_URL="https://images.unsplash.com/photo-1623356300559-def50f7b0b37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://media.istockphoto.com/id/1485069721/photo/winters-in-kashmir-high-above-snow-covered-landscape.jpg?s=2048x2048&w=is&k=20&c=hoboCvz5HuAeKrGzsRI_dPTFx5OWUKCqr33uA5QjG4g=";
    const RAIN_URL="https://images.unsplash.com/photo-1632919284615-737e7b04b65b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFJhaW55JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
           <CardMedia
          sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}</p>
          <p>Max Temp={info.tempMax}</p>
          <p>The Weather can described as <b>{info.weather}</b> and Feels like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
      </Card>
      </div>
        </div>
    )
}