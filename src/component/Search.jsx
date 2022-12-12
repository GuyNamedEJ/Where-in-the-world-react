import "../styles/Search.css";
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

export default function Search({ searchCountry, getFilter }) {
  const [region, setRegion] = useState("All");

  const handleSearch = (event) => {
    searchCountry(event.target.value);
  };

  const handleChange = (event) => {
    setRegion(event.target.value);
    getFilter(event.target.value);
  };

  return (
    <Box sx={{ mb: "32px" }}>
      <div className="search-container">
        <TextField
          onChange={handleSearch}
          sx={{ width: "343px", }}
          id="outlined-basic"
          label="Search for a country"
          variant="outlined"
          placeholder="Search for a country..."
        />
        <FormControl >
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
