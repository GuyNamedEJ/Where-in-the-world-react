import axios from "axios";

const GetCountries = async() =>{
    const response = await axios.get('https://restcountries.com/v3.1/all')
    console.log(response.data)
    return response.data;
}

export default GetCountries;