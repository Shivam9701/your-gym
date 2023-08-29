import React from 'react';
import {Route ,Routes } from 'react-router-dom';
import {Box} from '@mui/material'; //div only
import Home from './home';
import Navbar from './Navbar';
import ExerciseDetail from './exerciseDetail';
import Footer from './footer';
import '../app.css';

const App = () => {
  return (
    <Box width ="400px" sx={{width :{x1 :'1448px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />  
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;