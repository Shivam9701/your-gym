import React,{useContext} from 'react'
import {Box,Typography} from '@mui/material'
import BodyPartCard from './BodyPartCard';  
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

    return (
        <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Typography disabled={isLastItemVisible} onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart,isBodyParts }) => {
  
  const styleToApply = isBodyParts ? { width: { xs: '20vw', md: '15vw'}} : {width :{xs:'25vw',md:'20vw'}};

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} className={!isBodyParts&&'similar'}>
        {data.map((item) => {
          return (<Box 
             key ={item.id || item}
             itemID={item.id || item}
             title ={item.id || item}
             m="0 0px" 
             sx={styleToApply}            
            >
              { isBodyParts ? <BodyPartCard item={item} bodyPart={bodyPart} setBodyPart ={setBodyPart} />
             : <ExerciseCard exercise={item}/>}
           </Box>) 
        })}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar