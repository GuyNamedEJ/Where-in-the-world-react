import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {GetBorderCountry} from '../Api'
import '../styles/BorderCountry.css'
import { useState } from "react";

export default function BorderCountry({ borders })
{
    const navigate = useNavigate(); 
    
    const getBorderData = async (e) => {
        let borderData = await GetBorderCountry(e.target.value)
       
        navigate('/Country/' + borderData[0].name.common, {state:{country: borderData[0]}});
    }
    
    const borderArr = borders.map(border => {
        
        return (
            <Button onClick={getBorderData} className='btn' sx={{
                color:'black',
                backgroundColor:'white',
                margin: '5px',
                "&:hover":{backgroundColor: 'grey',
                color:'white',
                
                }
              }} variant="contained" key={border} value={border}>
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