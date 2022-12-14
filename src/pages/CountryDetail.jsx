import "../styles/CountryDetails.css";
import BorderCountries from '../component/BorderCountry'
import React from "react";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function CountryDetail() {
  const [nativeNames, setNativeNames] = useState();
  const [nativeNameArray, setNativeNameArray] = useState([])
  const [currenciesArray, setCurrenciesArray] = useState([])
  const [languagesArray, setLanguagesArray] = useState([])

  const location = useLocation();
  const { country } = location.state;
 
  const currencies = Object.values(country.currencies)
  const languages = Object.values(country.languages)
  // const borderCountries = country.borders
 


  const setArray = () => {
    if (country.name.nativeName == undefined) {
      console.log("No native names");
      setNativeNameArray([{ common: "N/A" }]);
      getNames();
    } else {
      setNativeNameArray(Object.values(country.name.nativeName));
      getNames();
    }
  };
  
  const getCurrencies = () =>{
    let result = "";
    for (let i = 0; i < currencies.length; i++) {
      i == currencies.length - 1 ? (result = result + currencies[i].name + " ") : (result = result + currencies[i].name + ", ");
    }
    setCurrenciesArray(result);
  }

  const getLanguages = () =>{
    let result = "";
    for (let i = 0; i < languages.length; i++) {
      i == languages.length - 1 ? (result = result + languages[i] + " ") : (result = result + languages[i] + ", ");
    }
    setLanguagesArray(result);
    
  }

  const getNames = () => {
    let result = "";

    for (let i = 0; i < nativeNameArray.length; i++) {
      i == nativeNameArray.length - 1
        ? (result = result + nativeNameArray[i].common + " ")
        : (result = result + nativeNameArray[i].common + ", ");
    }

    setNativeNames(result);
  };

  useEffect(() => {
    setArray(),
    getCurrencies(),
    getLanguages()
  }, [nativeNames]);

  return (
    <div>
    <Button sx={{
      color:'black',
      backgroundColor:'white',
      "&:hover":{backgroundColor: 'grey',
      color:'white'}
    }} variant="contained" startIcon={<ArrowBackIcon />} component={Link} to="/" role="button">Back</Button>
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
                {nativeNames}
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
                <span className="label">Currency: </span> {currenciesArray}
              </p>
              <p>
                <span className="label">Languages: </span> {languagesArray}
              </p>
            </div>
          </div>
          {/* <div className="border-countries">
            <p className="label">Border Countries:</p>
            <BorderCountries borders={borderCountries}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
