import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import logo from './logo.svg';
// import './Home.css';

const StyledBox = styled(Box)({
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',



  borderBottom: '1px solid #e8e8e8',
})

function Home() {
  return (
    <StyledBox>Hello</StyledBox>
  );
}

export default Home;
