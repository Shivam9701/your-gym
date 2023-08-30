import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button" alignContent="center" justifyContent="center"
            className="bodyPart-card"
            sx={{
                    borderTop:bodyPart ===item? '4px solid #ff2625':'none',
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: '20px',
                    width: '270px',
                    height: '280px',
                    cursor: 'pointer',
                    gap: '47px'
                
            }}
        >
            <img src={Icon} alt="icon" style={{ width: '40px', height: '40px' }} />
        </Stack>
    )
}

export default BodyPartCard