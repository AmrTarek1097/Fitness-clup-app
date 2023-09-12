import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <Stack direction='row' 
    justifyContent='none'
    px='10px'
    mt={3}
    sx={{gap:{sm:'100px'}}}>
      <Link to="/gym-exercise-app">
        <img src={Logo} alt="Logo" style={{width:'180px', height:'100px'}} />
      </Link>

      <Stack direction='row' gap='40px' fontSize='24px' alignItems='center'>
      <Link to='/' style={{textDecoration:'none', color:'#000', borderBottom:'3px solid #17477D'}}>Home</Link>
      <a href="#exercises" style={{textDecoration:'none', color:'#000'}}>Exercises</a>
      </Stack>

    </Stack>
  );
};

export default Navbar;
