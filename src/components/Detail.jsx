import React from 'react'
import {Stack,Button,Typography} from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  
  const extraDetail =[
    {
        icon:BodyPartImage,
        name:bodyPart,
        id:1
    },
    {
        icon : TargetImage,
        name:target,
        id:2
    }
    ,{
        icon:EquipmentImage,
        name:equipment,
        id:3
    }
  ]

  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
    
    <img src={gifUrl} alt="gif" loading="lazy"/>

    <Stack sx= {{gap:{lg:'35px',xs:'20px'}}}>

        <Typography variant="h3" textTransform="capitalize">
            {name}
        </Typography>

        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
            Exercises keep you strong.{' '}
            <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
            of the best <br /> exercises to target your {target}. It will help you improve your{' '}
            <br /> mood and gain energy.
        </Typography>

        {extraDetail.map((item) => {
          return (
            <Stack key={item.id} direction="row" gap="24px" alignItems='center'>
              <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
                    <img src= {item.icon} alt='help' style={{width:'50px',height:'50px'}} />
              </Button> 
              <Typography variant='h5' textTransform='capitalize'>
                {item.name}
              </Typography>           
            </Stack>
          );
        })} 

    </Stack>
    </Stack>
  )

}

export default Detail
