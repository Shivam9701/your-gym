import React,{useEffect,useState} from 'react'
import {Box,Button,TextField,Typography,Stack} from '@mui/material'

const SearchExercises = () => {
  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px" >
     {/*STACK ==FLEXBOX*/}
     <Typography fontWeight="700" sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
      Awesome Exercises You <br /> Should Know
     </Typography>
     <Box position="relative" mb="72px">

        <TextField height="76px" value="" onChange={(e)=>{}} placeholder='Search Exercises' type='text'
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '40px' },width:{lg:'800px',xs:'350px'},backgroundColor:"#fff",borderRadius:'5px'  }} />
       
        <Button className="search-btn" variant="contained" sx={{bgcolor : '#ff2625',color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'},height:'56px',position:'absolute',right:'0'}}> 
        Search
        </Button>
     </Box>
    </Stack> 
  )
}

export default SearchExercises