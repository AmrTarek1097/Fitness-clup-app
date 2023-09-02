import React from 'react'
import { Typography, Box, Stack } from '@mui/material';
import Categories from './Categories';
import Loader from './Loader';


const SimilarExercises = ({similarExercises}) => {
  return (
    <Box  sx={{mt: { lg: '100px', sm: '0px'}}}>
      <Typography variant='h4' ml={5} my={5}>
        Exercises target same muscles group
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative'}}>
        {similarExercises.length ? <Categories data={similarExercises}/> : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises