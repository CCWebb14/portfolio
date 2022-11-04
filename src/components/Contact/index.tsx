import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';

const Contact = () => (
  <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 350,
          height: 200,
        }}
      >
        <Typography>
          Cooper Webb <br />
          Victoria, B.C.
          <br />
          CCWebb14@gmail.com
        </Typography>
      </Card>
    </Box>
  </>
);

export default Contact;
