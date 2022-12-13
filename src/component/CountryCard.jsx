import "../styles/CountryCard.css";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Link } from 'react-router-dom'

export default function CountryCard({ country }) {
  
  return (
    <Card sx={{ width: 265 }}>
      <CardActionArea component={Link} to={'/Country/' + country.name.common} state={{country: country}}>
        <CardMedia
          component="img"
          alt={country.name.common}
          height="160"
          image={country.flags.svg}
        />
        <CardContent>
          <h1 className="country-name">{country.name.common}</h1>
          <p className="card-info">
            <span className="card-info-label">Population: </span>
            {country.population.toLocaleString("en-US")}
          </p>
          <p className="card-info">
            <span className="card-info-label">Region: </span>
            {country.region}
          </p>
          <p className="card-info">
            <span className="card-info-label">Capital: </span>
            {country.capital}
          </p>
        </CardContent>
        </CardActionArea>      
    </Card>
  );
}
