import "../styles/Navbar.css";
import { Paper } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function Navbar() {
    
  return (
    <Box
      sx={{
        width: '100%',
        mb: '24px'
      }}
    >
      <Paper elevation={2} sx={{ 
        borderRadius: 0,
        }}>
        <nav className= 'container'>
          <h1 className="logo">Where in the world?</h1>
        </nav>
      </Paper>
    </Box>
  );
}
