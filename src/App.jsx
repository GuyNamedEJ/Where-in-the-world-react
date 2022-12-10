import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import GetCountries from './Api'
import CountryList from "./component/CountryList";

export default function App() {
  const [countries,setCountries] = useState([])
  const [ogList,setOGList] = useState([])
  const [filter,setFilter] = useState('')
  const fetchCountries = async () =>{
    const result = await GetCountries()
    setOGList(result)
    setCountries(result)
  }

  const handleSearch = (term) =>{
    if(term.length === 0)
    {
      handleFilter(filter)
    }
    else{
      const searched = countries.filter(country => ((country.name.common).toLowerCase()).startsWith(term.toLowerCase()))
      setCountries(searched)   
    }
    
  }

  const handleFilter = (region) =>{
    setFilter(region)
    if(region === 'All' | region.length === 0)
    {
      setCountries(ogList)
    }
    else{
      const filtered = ogList.filter(country => country.region === region)
      setCountries(filtered)
    }

    
  }
  
  useEffect(() => {
    fetchCountries();
  },[])
  
  return (
    <div>
      <Navbar />
      <Search searchCountry={handleSearch} getFilter={handleFilter}/>
      <CountryList countries={countries} />
    </div>
  );
}
