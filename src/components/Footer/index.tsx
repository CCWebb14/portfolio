import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import { LinkedIn, GitHub, Email } from '@mui/icons-material';
const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px 0px',
  borderTop: '1px solid #e8e8e8',
  // for sticky footer implementation
  // backgroundColor: 'white',
  // position: 'fixed',
  // bottom: 0,
  // left: 0,
  // width: '100%',
});

const Footer = () => {
  return (
    <StyledBox>
      <Stack direction="row" spacing={5}>
        <IconButton
          href="https://www.linkedin.com/in/cooper-webb-25b991255"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://github.com/CCWebb14"
          target="_blank"
          rel="noopener noreferrer"
        >
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
