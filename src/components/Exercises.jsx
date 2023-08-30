import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack, Box, Typography } from '@mui/material/';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
const Exercises = ({ exercises, setExercises, bodyPart }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const topValue = window.innerWidth < 600 ? 900 : window.innerWidth < 1200 ? 955 : 1650;
  const url = `https://exercisedb.p.rapidapi.com/exercises`;

  const paginate = (e, value) => {   //this function is called when the page number is changed
    setCurrentPage(value);
    window.scrollTo({ top: topValue, behaviour: 'smooth' });                         //inherently event,value is passed by MUI
  }

  useEffect(() => {
    const fetchExercises = async () => {
      let exercisesData =[];
      if(bodyPart==='all'){
      exercisesData = await fetchData(url, exerciseOptions);
      }
      else{
        exercisesData = await fetchData(url + '/bodyPart/' + bodyPart, exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercises();
  },[bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises =exercises.slice(indexOfFirstExercise,indexOfLastExercise); 
  
  return (
    <Box id="exercises" sx={{ mt: { lg: '110px', } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => {
          return (<ExerciseCard key={index} exercise={exercise} />)
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage &&
          (<Pagination shape="rounded" color="standard"
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate} //done inherently by MUI
            size="large" />)}
      </Stack>
    </Box>
  )
}

export default Exercises