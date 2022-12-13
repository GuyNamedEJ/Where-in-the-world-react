import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import GetCountries from "../Api";
import CountryList from "../component/CountryList";
import { Route, Routes } from "react-router-dom";
import CountryDetail from './CountryDetail';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');


  const fetchCountries = async () => {
    const result = await GetCountries();
    setCountries(result);
  };
  /*
    When a user types in a country, start filtering the countries 

  */

    const handleSearch = (term) =>{
        setSearchTerm(term)
        console.log(`Search term is: ${term}`)
          
    }

    const handleFilter = (region) =>{
      setFilter(region)
      console.log(`Region filter is: ${region}`) 
    }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <div className="container">
      <Search searchCountry={handleSearch} getFilter={handleFilter} />
      <CountryList countries={countries} regionFilter ={filter} searchKey={searchTerm}/>
      
      </div>
      
    </div>
  );
}
