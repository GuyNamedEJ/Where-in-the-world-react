import "../styles/Navbar.css";
import { Paper } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark-mode')
    }
      else{
        setTheme('light')
      }
    }
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
        <nav className={`container ${theme}`}>
          <h1 className="logo">Where in the world?</h1>
          <button onClick={toggleTheme}>Dark Mode</button>
        </nav>
      </Paper>
    </Box>
  );
}
