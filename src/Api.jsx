import axios from "axios";

// Get all the countries
const GetCountries = async() =>{
    const response = await axios.get('https://restcountries.com/v3.1/all')
    return response.data;
}

// Get The border country, given the border's abbreviation
const GetBorderCountry = async(border) =>
{
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${border}`)
    return response.data;
}

export default GetCountries
export{GetBorderCountry}