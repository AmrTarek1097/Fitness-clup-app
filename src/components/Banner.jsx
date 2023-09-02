import React from "react";
import { Stack, Typography, Button } from "@mui/material";
// import BannerImage from "../assets/images/banner.png";

const Banner = () => {
  return (
    <Stack mt={15}
      // sx={{
      //   mt: { lg: "80px", xs: "80px" },
      //   ml: { lg: '40px' },
      //   mx: { sm: 'auto' },
      // }}
      justifyContent = 'center'
      alignItems = 'center'
      lineHeight="60px"
      p="20px"
      position="relative"
    >
      <Typography
        color="#17477D"
        fontWeight="600"
        fontSize="64px"
        lineHeight="60px"
        textAlign='center'

      >
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        my={3}
        sx={{ fontSize: { lg: "44px", xs: "34px" } }}
        textAlign='center'
        color='#FF5465'
      >
        Sweat, Smile <br /> And Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="45px" mb={3}  textAlign='center'>
        Check out the most effective exercises{" "}
      </Typography>

      <Button 
      className="search-btn"
     
      href="#exercises"
      sx={{
        backgroundColor:'#17477D',
        p:'15px',
        color: '#fff',
        fontSize: { lg: '18px', xs: '12px'}
      }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#17477D"
        fontSize='200px'
        alignItems='center'
        sx={{
          opacity:0.1,
          fontSize: { lg: '200px', md: "150px", xs: "60px" },
        }}
      >
        Exercises
      </Typography>

      {/* <img src={BannerImage} alt="banner" className="banner-img" /> */}
    </Stack>
  );
};

export default Banner;
