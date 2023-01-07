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

  const location = useLocation();
  const { country } = location.state;
  
  /**
   * Native names, Currency, and borders are arrays of their own objects and may or may not exist/contain data
   * The following functions check to see if they have data, if they do, they will return a component with their respective data
   * 
   * The reason I broke these up into seperate components is that I was getting an issue with render data on the page. 
   * I had a useEffect method that would run if the country changed, but It was 1 render behind. I.E. You select USA, no languages, currency appeared. Select the Mexico border country button and Mexico would appear with USA currency and languaes instead of the data for Mexico
   */
  function DisplayNativeNames({hasNativeName}) {
    const isEmpty = hasNativeName;
    // console.log(country)
    if (!isEmpty) {
      // Pass the nativeNames array to the component
      return <NativeNames nativeName={country.name.nativeName} />
    }
  }

  function DisplayBorders({hasBorders}) {
    const isEmpty = hasBorders;
    if (!isEmpty) {
       // Pass the border countries array to the component
      return <BorderCountries borders={country.borders} />
    }
    // if no border countries exist, return a para element with text saying "No bordering countries"
    else{
      return <p>No Bordering Countries</p>
    }
  }

  function DisplayLanguages({hasLanguages}) {
    const isEmpty = hasLanguages;
    if (!isEmpty) {
      // Pass the languages array to the component
      return <Languages languages={country.languages} />
    }
  }


  function DisplayCurrency() {
    // Pass the border countries array to the component
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
                {/**Display the data given returned from the corresponding function */}
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
                {/**Display the data given returned from the corresponding function */}
                <DisplayCurrency />
              </p>
              <p>
                <span className="label">Languages: </span> <DisplayLanguages hasLanguages = {country.languages !== undefined ? false : true}/>
              </p>
            </div>
          </div>
          <div className="border-countries">
            <p className="label">Border Countries:</p>
            {/**Display the data given returned from the corresponding function */}
            <DisplayBorders hasBorders = {country.borders !== undefined ? false : true}/>
          </div>
        </div>
      </div>
    </div>
  );
}
