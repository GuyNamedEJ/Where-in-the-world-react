import '../styles/CountryList.css'
import CountryCard from "./CountryCard";
export default function CountryList({ countries }) {

  const displayCountries = countries.map((country) => {
    return <CountryCard country={country} key={country.name.official} />;
  })


  return (
    <div className="card-container">
        {displayCountries}
    </div>
  )
}
