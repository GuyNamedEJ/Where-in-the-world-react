import axios from "axios";

const GetCountries = async() =>{
    const response = await axios.get('https://restcountries.com/v3.1/all')
    console.log(response.data)

    response.data.sort( function( a, b ) {
        a = a.name.common.toLowerCase();
        b = b.name.common.toLowerCase();
    
        return a < b ? -1 : a > b ? 1 : 0;
    });

    return response.data;
}

export default GetCountries;