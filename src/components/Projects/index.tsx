import React from 'react';
import { Box, Grid } from '@mui/material';
import ProjectCard from '../ProjectCard';
import portfolio_thumbnail from './images/portfolio.png';
import BTC_CAD_thumbnail from './images/btc_cad_converter.png';
import EAS_thumbnail from './images/etch_a_sketch.png';
import array_thumbnail from './images/array_game.png';
import RPS_thumbnail from './images/rock_paper_scissors.png';
import landing_page_thumbnail from './images/landing_page.png';

const Projects = () => (
  <>
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: 5,
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={portfolio_thumbnail}
            title="Portfolio"
            body="test"
            testLink="https://cooptech.io"
            codeLink="https://github.com/CCWebb14/portfolio"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={BTC_CAD_thumbnail}
            title="Bitcoin to CAD converter"
            body="test"
            testLink="https://ccwebb14.github.io/bitcoin-cad-converter/"
            codeLink="https://github.com/CCWebb14/bitcoin-cad-converter"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={EAS_thumbnail}
            title="Etch-a-Sketch"
            body="test"
            testLink="https://ccwebb14.github.io/Etch-a-Sketch/"
            codeLink="https://github.com/CCWebb14/Etch-a-Sketch"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={array_thumbnail}
            title="Array Game"
            body="test"
            testLink="https://ccwebb14.github.io/Array-Light-Game/"
            codeLink="https://github.com/CCWebb14/Array-Light-Game"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={RPS_thumbnail}
            title="Rock-Paper-Scissors"
            body="test"
            testLink="https://ccwebb14.github.io/Rock-Paper-Scissors/"
            codeLink="https://github.com/CCWebb14/Rock-Paper-Scissors"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={landing_page_thumbnail}
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
