import React,{useEffect,useState} from 'react'
import {Box,Button,TextField,Typography,Stack} from '@mui/material'
import {fetchData,exerciseOptions} from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = (setExercises,bodyPart,setBodyPart) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises`;
  const [search,setSearch] = useState(''); //search is the value of the input field
  const [bodyParts, setBodyParts] = useState([]); //bodyParts is the array of body parts displayed before search

  useEffect(() => { //  //useEffect is called only once BECAUSE of the empty dependency array, otherwise if we put search in the dependency array, useEffect will be called every time search changes
                    // if no dependency array is provided, useEffect will be called every time the component is rendered
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(url + '/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();  
    }, []); 

  const handleSearch = async() => {
       if(search){
         const exercisesData = await fetchData(url,exerciseOptions);
         
         const searchedExercises = exercisesData.filter((exercise) => {
              return exercise.name.includes(search)
                  || exercise.target.includes(search)
                  || exercise.equipment.includes(search)
                  || exercise.bodyPart.includes(search)
        });
        setSearch('');
        setExercises(searchedExercises);        
  }
}

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="37px" >
     {/*STACK ==FLEXBOX*/}
     <Typography fontWeight="700" sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
      Awesome Exercises You <br /> Should Know
     </Typography>
     <Box position="relative" mb="72px">

        <TextField height="76px" value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder='Search Exercises' type='text'
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '40px' },width:{lg:'800px',xs:'350px'},backgroundColor:"#fff",borderRadius:'5px'  }} />
       
        <Button className="search-btn" sx={{bgcolor : '#ff2625',color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'},height:'56px',position:'absolute',right:'0'}}
          onClick={handleSearch}> 
        Search
        </Button>
     </Box>
     <Box sx={{position:"relative",width:'100%',p:'20px'}} >
      <HorizontalScrollBar data={bodyParts}
        bodyPart={bodyPart} setBodyPart ={setBodyPart} />
    </Box>
    </Stack> 
  )
}

export default SearchExercises