
import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { LinkedIn, GitHub, Email } from '@mui/icons-material';
const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  color: 'red',
  marginBottom: '10px',
});

const StyledLinkedIn = styled(LinkedIn)({
  color: 'red',
});



const Footer = () => {
	return (
    <StyledBox>
      <Stack direction="row" spacing={5}>
        <Avatar>
          <LinkedIn />
        </Avatar>
        <Avatar>
          <GitHub />
        </Avatar>
        <Avatar>
          <Email />
        </Avatar>
      </Stack>
    </ StyledBox>
	);
};

export default Footer;
