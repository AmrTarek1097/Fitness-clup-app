import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import  Categories  from "./Categories";

const SearchExercise = ({bodyPart, setBodyPart, setExercises}) => {

  const [search, setSearch] = useState("");
  
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {

      const bodyPartsList = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      
      setBodyParts(['all', ...bodyPartsList])
    }
    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

       const dataResults = await exerciseData.filter(
        
        (exercise) => {
          
          return exercise.name.toLowerCase().includes(search)
          ||  exercise.target.toLowerCase().includes(search)
          ||  exercise.bodyPart.toLowerCase().includes(search)
          ||  exercise.equipment.toLowerCase().includes(search)
        } 

      )
      setSearch('')
      setExercises(dataResults)
      window.scrollTo({top: 2000, behavior: "smooth"})

    }
  }



  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px"
    sx={{
      mt: { lg: '40px',  xs: '40px'},
    }}>
      
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="70px">

      <TextField
          sx={{ 
            input: 
            { 
              fontWeight: '700', 
              border: 'none', 
              borderRadius: '4px' 
            }, 
            width: 
            { lg: '800px', xs: '350px' }, 
            backgroundColor: '#fff', 
            borderRadius: '40px' 
          }}
          height="76px"
          value={search}
          onChange={(e) => { setSearch(e.target.value.toLowerCase())}}
          placeholder="Search Exercises"
          type="text"
        />

          <Button className="search-btn" 
          sx={{
            backgroundColor: '#17477D',
            color: '#FFF',
            height: "56px",
            width: { lg: '180px', xs: '90px' },
            fontSize: { lg: '22px', xs: '12px'},
            position: 'absolute',
            right: '0px'
          }} 
          onClick={handleSearch}
          >
            Search
          </Button>

      </Box>
      
      <Box sx={{ position: 'relative', width: '100%', my: '90px'}} >
        <Categories data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
      
    </Stack>
  );
};

export default SearchExercise;
