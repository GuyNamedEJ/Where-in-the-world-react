import "../styles/CountryDetails.css";
import BorderCountries from "../component/BorderCountry";
import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CountryDetail() {
  const [nativeNames, setNativeNames] = useState();
  const [currencies, setCurrencies] = useState();
  const [nativeNameArray, setNativeNameArray] = useState([]);
  const [currencyString, setCurrencyString] = useState([]);
  const [languagesString, setLanguagesString] = useState([]);
  const [languagesArray, setLanguagesArray] = useState([]);

  const location = useLocation();
  const { country } = location.state;
  
  const setArray = () => {
    if (country.name.nativeName == undefined) {
      // console.log("No native names");
      setNativeNameArray([{ common: "No Native Names" }]);
      getNames();
    } else {
      setNativeNameArray(Object.values(country.name.nativeName));
      getNames();
    }
  };

  const setCurrency = () => {
    if (country.currencies == undefined) {
      // console.log("N/A");
      setCurrencyString([{ name: "N/A" }]);
      getCurrencies();
    } else {
      // console.log('setting currencies')
      setCurrencyString(Object.values(country.currencies));
      // console.log(`Currency is: ${currencyString}`)
      getCurrencies();
    }
  };

  const setLanguages = () => {
    if (country.languages == undefined) {
      // console.log("No native names");
      setLanguagesArray([ "N/A" ]);
      getLanguages();
    } else {
      setLanguagesArray(Object.values(country.languages));
      getLanguages();
    }
  };

  // console.log(`Languages Array: ${languagesArray}`)

  const getCurrencies = () => {
    let result = "";
    // console.log(currencyString[0])
    for (let i = 0; i < currencyString.length; i++) {
      i == currencyString.length - 1
        ? (result = result + currencyString[i].name + " ")
        : (result = result + currencyString[i].name + ", ");
    }

    setCurrencies(result);
  };

  const getLanguages = () => {
    let result = "";
    for (let i = 0; i < languagesArray.length; i++) {
      i == languagesArray.length - 1
        ? (result = result + languagesArray[i] + " ")
        : (result = result + languagesArray[i] + ", ");
    }
    setLanguagesString(result);
  };

  const getNames = () => {
    let result = "";

    for (let i = 0; i < nativeNameArray.length; i++) {
      i == nativeNameArray.length - 1
        ? (result = result + nativeNameArray[i].common + " ")
        : (result = result + nativeNameArray[i].common + ", ");
    }

    setNativeNames(result);
  };

  function DisplayBorders({hasBorders}) {
    const isEmpty = hasBorders;
    if (!isEmpty) {
      return <BorderCountries borders={country.borders} />
    }
    else{
      return <p>No Bordering Countries</p>
    }

  }

  useEffect(() => {
    setArray(), setCurrency(), setLanguages();
  }, [nativeNames]);

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
                <span className="label">Currency: </span> {currencies}
              </p>
              <p>
                <span className="label">Languages: </span> {languagesString}
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
