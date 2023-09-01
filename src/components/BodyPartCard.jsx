import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
    
    return (
        <Stack
            type="button" alignItems="center" justifyContent="center"
            className="bodyPart-card"
            sx={{
                    borderTop: bodyPart ===item ? '4px solid #ff2625':'',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: 'calc((100vw - 104px)/4)',
                    cursor: 'pointer',
                    gap: '4px'
                
            }}
            onClick={() => setBodyPart(item)}
        >
            <img src={Icon} alt="icon" style={{ width: '40px', height: '40px' }} />
        
            <Typography sx={{ fontWeight: 'bold' ,fontSize: '.75em' ,textTransform: 'Capitalize'}}>{item}</Typography>
        </Stack>
    )
}

export default BodyPartCard