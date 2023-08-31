import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ mt: { lg: '200px', xs: '20px' }, p: '20px' }}>
      <Typography variant='h3' mb='33px'>
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', sm: '50px' }, justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap' }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => {
          return (
            <a key={index} className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank' rel='noreferrer'>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#ff0000">
                  {item.video.title}</Typography>
                <Typography variant="h6" color="#000">
                  {item.video.channelName}</Typography>
              </Box>
            </a>)
        })}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos