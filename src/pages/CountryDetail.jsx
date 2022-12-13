import "../styles/CountryCard.css";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function CountryDetail() {
  const [nativeNames, setNativeNames] = useState()
  const [nativeNameArray, setNativeNameArray] = useState([])
  const location = useLocation();
  const { country } = location.state;

  const setArray = () => {
    if(country.name.nativeName == undefined){
      console.log('No native names')
      setNativeNameArray([{common:'N/A'}])
      console.log(nativeNameArray)
      getNames()
    }
    else{
      setNativeNameArray(Object.values(country.name.nativeName))
      console.log(nativeNameArray)
      getNames()
    }
  }
  
  const getNames = () =>{
    let result = ''
    
      for(let i = 0; i < nativeNameArray.length; i++){
        i == nativeNameArray.length-1 ? result = result + nativeNameArray[i].common + " ":result = result + nativeNameArray[i].common + ", "
      }

    setNativeNames(result);
  }

  useEffect(() => {
    setArray();
  },[nativeNames]);
 
  return (
    <div>
      <button>
        <Link to="/">Back</Link>
      </button>
      <div className="container">
        <img src={country.flags.svg} alt="" width={"320px"} />
        <h1 className="country-name">{country.name.common}</h1>
        <p className="card-info">
          <span className="card-info-label">Native Name: </span>
          {nativeNames}
        </p>
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
          {country.capital? `${country.capital}` : 'None'}
        </p>
      </div>
    </div>
  );
}
