import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import getCountryByCode from '../Api'

export default function BorderCountry({ borders })
{
    const borderArr = borders.map(border =>{
        return (
            <Button sx={{
                color:'black',
                backgroundColor:'white',
                "&:hover":{backgroundColor: 'grey',
                color:'white'}
              }} variant="contained" key={border}>
                {border}
            </Button>
        )
    })

    return(
        <div className="border-container">
            {borderArr}
        </div>
    )
}