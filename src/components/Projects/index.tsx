import React from 'react';
import { Box, Grid } from '@mui/material';
import ProjectCard from '../ProjectCard';
import BTC_CAD_Thumbnail from './btc_cad_converter.png';

const Projects = () => (
  <>
    <Box sx={{ margin: 5, flexGrow: 1 }}>
      <Grid container justifyContent={'center'} spacing={5}>
        <Grid item xs>
          <ProjectCard
            imageLink={BTC_CAD_Thumbnail}
            title="Bitcoin to CAD converter"
            body="test"
            testLink="https://ccwebb14.github.io/bitcoin-cad-converter/"
            codeLink="test"
          />
        </Grid>
        <Grid item xs>
          <ProjectCard
            title="Array Game"
            body="test"
            testLink="test"
            codeLink="test"
          />
        </Grid>
        <Grid item xs>
          <ProjectCard
            title="Landing Page"
            body="test"
            testLink="https://ccwebb14.github.io/Landing-Page/"
            codeLink="https://github.com/CCWebb14/Landing-Page/tree/plain"
          />
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Projects;
