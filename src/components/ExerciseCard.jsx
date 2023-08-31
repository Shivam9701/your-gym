import React from 'react';
import {Link} from 'react-router-dom';
import {Stack,Button,Typography } from '@mui/material'

const ExerciseCard = ({exercise,hsb}) => {
  const className = `exercise-card ${hsb ? 'hsb' : ''}`;
  return (
    <Link to={`/exercise/${exercise.id}`} className={className}>
      <img src={exercise.gifUrl}  alt={exercise.name} loading='lazy'/>
      <Stack direction="row">
        <Button sx={{color:'#fff',background:'#ffa9a9',fontSize:'14px',
         borderRadius:'20px',textTransform:'capitalize'}}>
        {exercise.bodyPart}
        </Button>
        <Button sx={{color:'#fff',background:'#fcc757',fontSize:'14px',
         borderRadius:'20px',textTransform:'capitalize'}}>
        {exercise.target}
        </Button>
        </Stack>   
        <Typography sx={{ pb:'10px',ml:"21px",color:'#000',fontWeight:'bold',mt:'11px',textTransform:'capitalize',fontSize:'22px'}}>
            {exercise.name}
        </Typography>
    </Link>
  
  )
}

export default ExerciseCard