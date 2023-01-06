import "../styles/CountryDetails.css";
import BorderCountries from "../component/BorderCountry";
import Languages from "../component/Languages";
import Currencies from "../component/Currencies";
import NativeNames from "../component/NativeNames";
import React from "react";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CountryDetail() {
  // const [nativeNames, setNativeNames] = useState();
  // const [nativeNameArray, setNativeNameArray] = useState([]);

  const location = useLocation();
  const { country } = location.state;
  
  function DisplayNativeNames({hasNativeName}) {
    const isEmpty = hasNativeName;
    console.log(country)
    if (!isEmpty) {
      return <NativeNames nativeName={country.name.nativeName} />
    }
  }

  function DisplayBorders({hasBorders}) {
    const isEmpty = hasBorders;
    if (!isEmpty) {
      return <BorderCountries borders={country.borders} />
    }
    else{
      return <p>No Bordering Countries</p>
    }
  }

  function DisplayLanguages({hasLanguages}) {
    const isEmpty = hasLanguages;
    if (!isEmpty) {
      return <Languages languages={country.languages} />
    }
    
  }

  function DisplayCurrency() {
    return <Currencies currency={country.currencies} />
  }

  return (
    <div>
      <Button
        sx={{
          color: "black",
          backgroundColor: "white",
          "&:hover": { backgroundColor: "grey", color: "white" },
        }}
        variant="contained"
        startIcon={<ArrowBackIcon />}
        component={Link}
        to="/"
        role="button"
      >
        Back
      </Button>
      <div className="country-details">
        <img
          className="flag"
          src={country.flags.svg}
          alt={`${country.name.common} Flag`}
        />
        <div className="details">
          <h1 className="name">{country.name.common}</h1>

          <div className="details-container">
            <div className="details-left">
              <p>
                <span className="label">Native Names: </span>
                <DisplayNativeNames hasNativeName = {country.name.nativeName !== undefined ? false : true}/>
              </p>
              <p>
                <span className="label">Population: </span>
                {country.population.toLocaleString("en-US")}
              </p>
              <p>
                <span className="label">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="label">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="label">Capital: </span>
                {country.capital}
              </p>
            </div>

            <div className="details-right">
              <p>
                <span className="label">Top Level Domain: </span>
                {country.tld}
              </p>
              <p>
                <span className="label">Currency: </span>
                <DisplayCurrency />
              </p>
              <p>
                <span className="label">Languages: </span> <DisplayLanguages hasLanguages = {country.languages !== undefined ? false : true}/>
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p className="label">Border Countries:</p>
            <DisplayBorders hasBorders = {country.borders !== undefined ? false : true}/>
          </div>
        </div>
      </div>
    </div>
  );
}
