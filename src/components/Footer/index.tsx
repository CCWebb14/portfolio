import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { LinkedIn, GitHub, Email } from '@mui/icons-material';
const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  color: 'red',
  margin: '10px 0px',
});

const Footer = () => {
  return (
    <StyledBox>
      <Stack direction="row" spacing={5}>
        <IconButton href="https://www.linkedin.com/in/cooper-webb-25b991255">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://github.com/CCWebb14">
          <GitHub />
        </IconButton>
        <IconButton href="mailto:CCWebb14@gmail.com">
          <Email />
        </IconButton>
      </Stack>
    </StyledBox>
  );
};

export default Footer;
