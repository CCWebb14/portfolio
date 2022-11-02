
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { LinkedIn, GitHub, Email } from '@mui/icons-material';
const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  color: 'red',
  margin: '10px 0px',
});

const StyledLinkedIn = styled(LinkedIn)({
  color: 'red',
});



const Footer = () => {
	return (
    // <StyledBox>
    //   <Stack direction="row" spacing={5}>
    //     <Avatar>
    //       <LinkedIn href='www.linkedin.com/in/cooper-webb-25b991255'/>
    //     </Avatar>
    //     <Avatar>
    //       <GitHub href='https://github.com/CCWebb14'/>
    //     </Avatar>
    //     <Avatar>
    //       <Email href='CCWebb14@gmail.com'/>
    //     </Avatar>
    //   </Stack>
    // </ StyledBox>
        <StyledBox>
      <Stack direction="row" spacing={5}>
        <IconButton href='https://www.linkedin.com/in/cooper-webb-25b991255'>
          <LinkedIn/>
        </IconButton>
        <IconButton href='https://github.com/CCWebb14'>
          <GitHub/>
        </IconButton>
        <IconButton  href='mailto:CCWebb14@gmail.com'>
          <Email/>
        </IconButton>
      </Stack>
    </ StyledBox>
	);
};

export default Footer;
