import { useEffect, useState } from "react";
import Search from "../component/Search";
import GetCountries from "../Api";
import CountryList from "../component/CountryList";


export default function App() {
  // Keep track of the countries, Filter, and searchterm
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');

  // Get all the countries and assign the countries piece of state with the array of country objects
  const fetchCountries = async () => {
    const result = await GetCountries();
    setCountries(result);
  };

  // this will take the value of the search bar and assign it to the search term state variable
  const handleSearch = (term) =>{
        setSearchTerm(term)
        // console.log(`Search term is: ${term}`)  
    }

  // Get the selected filter from the dropdown and assign it to the filter state variable
  const handleFilter = (region) =>{
      setFilter(region)
      // console.log(`Region filter is: ${region}`) 
    }

  // On first page render, run the function to get all the countries
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <div className="container">
      {/**Render the search bar, I am passing two functions as props to the component
        1 - handleSearch will run when the user types in the search bar
        2 - handleFilter will run when the user selects the filter
        They will be received in the search component as searchCountry and getFilter
       */}
      <Search searchCountry={handleSearch} getFilter={handleFilter} />
      {/**
          Render the countries on the screen, I will also pass the region Filter and search term to sort the array of countries accordingly
       */}
      <CountryList countries={countries} regionFilter ={filter} searchKey={searchTerm}/>
      </div>
    </div>
  );
}
