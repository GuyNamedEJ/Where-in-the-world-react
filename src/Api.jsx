import axios from "axios";

const GetCountries = async() =>{
    const response = await axios.get('https://restcountries.com/v3.1/all')

    return response.data;
}

const GetBorderCountry = async(border) =>
{
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${border}`)

    return response.data;
    // console.log(response.data)
}



export default GetCountries
export{GetBorderCountry}