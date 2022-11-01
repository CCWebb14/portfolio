import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import background from './backgroundPhoto.jpg'
import Button from '@mui/material/Button';
import {
  Link
} from 'react-router-dom';

const StyledBox = styled(Box)({
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  height: "100%",
  width: "100%",
  backgroundPosition: "center center",
  backgroundRepeat: 'no-repeat',
})



function Home() {
  return (
    <StyledBox>
        <Typography sx={{ fontSize: 60 }} color="white" 
        fontFamily="Montserrat" fontWeight="500" marginTop="100px">
          Hi, I'm Cooper
        </ Typography>
        <Typography sx={{ fontSize: 30 }} color="#0ad43c" marginBottom='20px' 
        fontFamily="Montserrat" fontWeight="300">
          a web developer
        </ Typography>
        <Button variant="outlined" color="success" to='/projects' component={Link}>
          Come see what I've been working on
        </Button>

    </StyledBox>
  );
}

export default Home;
