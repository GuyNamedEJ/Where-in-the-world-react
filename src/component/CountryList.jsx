import { useState } from 'react';
import '../styles/CountryList.css'
import CountryCard from "./CountryCard";
export default function CountryList({ countries, regionFilter, searchKey }) {

  const searched = countries.filter(country => ((country.name.common).toLowerCase()).startsWith(searchKey.toLowerCase()))
  
  const displayCountries = searched.map((country) => {
    console.log(`Searched Array contains these countries ${searched}`)
    if(regionFilter == 'All')
    {
      return <CountryCard country={country} key={country.name.official} />;
    }

    else if(country.region == regionFilter )
    {
      return <CountryCard country={country} key={country.name.official} />;
    }
    
  })

  return (
    <div className="card-container">
        {displayCountries}
    </div>
  )
}
