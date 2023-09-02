import React, { useState } from 'react';
import { Box } from "@mui/material";
import Banner from '../components/Banner';
import SearchExercise from '../components/SearchExercise';
import Exercises from '../components/Exercises';

const Home = () => {

const [bodyPart, setBodyPart] = useState('all')
const [exercises, setExercises] = useState([]);

console.log(bodyPart)
  return (
    <Box>
      <Banner />
      <SearchExercise  exercise={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home