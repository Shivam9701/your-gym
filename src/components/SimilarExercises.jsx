import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({equipmentExercises,targetMuscleExercises}) => {

  return (
    <Box sx={{mt:{lg:'100px',xs:'10px'}}} px="20px">
      <Typography variant="h3" mb="5px">Exercises that target the same muscle group</Typography>
      
      <Stack direction="row" sx={{position:'relative'}}>
        {targetMuscleExercises.length? 
        <Box sx={{ position: "relative", width: '100%' }} >
        <HorizontalScrollBar data={targetMuscleExercises} />
        </Box>
        :<Loader />}
        </Stack>
      <Typography variant="h3" mb="5px">Exercises that target the same equipment</Typography>
      
      <Stack direction="row" sx={{position:'relative'}}>
        {equipmentExercises.length? 
        <Box sx={{ position: "relative", width: '100%'}} >
        <HorizontalScrollBar data={equipmentExercises} />
        </Box>
        :<Loader />}
        </Stack>
      </Box>
  )
}

export default SimilarExercises