import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
    console.log(item);
    return (
        <Stack
            type="button" alignItems="center" justifyContent="center"
            className="bodyPart-card"
            sx={{
                    borderTop: bodyPart ===item ? '4px solid #ff2625':'',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '20vw',
                    height: '20vw',
                    cursor: 'pointer',
                    gap: '4px'
                
            }}
        >
            <img src={Icon} alt="icon" style={{ width: '40px', height: '40px' }} />
        
            <Typography sx={{ fontSize: '.7rem' ,textTransform: 'uppercase'}}>{item}</Typography>
        </Stack>
    )
}

export default BodyPartCard