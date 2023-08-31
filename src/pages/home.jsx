import React, { useState } from 'react'
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
const Home = () => {
  const [bodyPart,setBodyPart]=useState('all');//bodyPart is the value of the body part selected
  const [exercises, setExercises] = useState([]); //exercises is the array of exercises displayed after search

  return (
    <Box>
      <HeroBanner />
      
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart ={setBodyPart} />

      <Exercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      exercises={exercises} />

    </Box>
  )
}

export default Home