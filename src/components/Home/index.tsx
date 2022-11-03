import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import background from './backgroundPhoto.jpg';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
});

function Home() {
  return (
    <StyledBox>
      <Typography
        sx={{
          fontSize: 60,
          marginTop: '5vh',
          '@media(max-width: 480px)': { fontSize: 40 },
        }}
        color="white"
        fontFamily="Montserrat"
        fontWeight="500"
      >
        {"Hi, I'm Cooper"}
      </Typography>
      <Typography
        sx={{
          marginBottom: '2vh',
          fontSize: 30,
        }}
        color="#0ad43c"
        fontFamily="Montserrat"
        fontWeight="300"
      >
        {'a web developer'}
      </Typography>
      <Button
        variant="outlined"
        color="success"
        to="/projects"
        component={Link}
      >
        {"Come see what I've been working on"}
      </Button>
    </StyledBox>
  );
}

export default Home;
