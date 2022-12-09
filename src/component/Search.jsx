import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

export default function Search({getFilter}) {
  const [region, setRegion] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setRegion(event.target.value);
    getFilter(event.target.value)
  };
  return (
    <Box 
    className="container"
    sx={{mb:'32px'}}>
      <div className="search-container">
        <TextField
          sx={{ width: "343px", mb: "40px" }}
          id="outlined-basic"
          label="Search for a country"
          variant="outlined"
          placeholder="Search for a country..."
        />
        <FormControl fullWidth>
          <InputLabel id="region-filter-label">Region</InputLabel>
          <Select
            sx={{ width: "200px" }}
            labelId="region-filter-label"
            id="region-filter"
            value={region}
            label="Region"
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>Americas</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
