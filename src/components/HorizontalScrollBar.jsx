import React,{useContext} from 'react'
import {Box,Typography} from '@mui/material'
import BodyPartCard from './BodyPartCard';  
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

    return (
        <div disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="right-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </div>
    );
};

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <div disabled={isLastItemVisible} onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </div>
    );
};

const HorizontalScrollBar = (props) => {
 
  const {data,bodyPart,setBodyPart} = props;
  console.log(data);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => {
          return (<Box 
             key ={item.id || item}
             itemId={item.id || item}
             title ={item.id || item}
             m="0 40px"            
            >
            <BodyPartCard item={item} bodyPart={bodyPart} setBodyPart ={setBodyPart} />
           </Box>) 
        })}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar