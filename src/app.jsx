import React from 'react';
import {Route ,Routes } from 'react-router-dom';
import {Box} from '@mui/material'; 
import Navbar from './components/Navbar';
import Home from './pages/home';
import ExerciseDetail from './pages/exerciseDetail';
import Footer from './components/footer';
import './app.css';

const App = () => {
  return (
    <Box width ="400px" sx={{width :{xl :'1488px'}}} m="auto">
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