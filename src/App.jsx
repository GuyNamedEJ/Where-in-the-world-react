import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import GetCountries from './Api'
import CountryList from "./component/CountryList";

export default function App() {
  const [countries,setCountries] = useState([])
  const [ogList,setOGList] = useState([])
  const fetchCountries = async () =>{
    const result = await GetCountries()
    setOGList(result)
    setCountries(result)
  }

  const handleFilter = (region) =>{
    if(region === 'All')
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
      <Search getFilter={handleFilter}/>
      <CountryList countries={countries} />
    </div>
  );
}
