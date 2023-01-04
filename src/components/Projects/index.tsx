import React from 'react';
import { Box, Grid } from '@mui/material';
import ProjectCard from '../ProjectCard';
import portfolio_thumbnail from './images/portfolio.png';
import forum_thumbnail from './images/django_forum.png';
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
            body="This portfolio website was developed in react with the material-ui library.
             It is currently running on an AWS EC2 nginx web-server."
            testLink="https://cooptech.io"
            codeLink="https://github.com/CCWebb14/portfolio"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={forum_thumbnail}
            title="Django-React Forum"
            body="In this project, the Django-REST framework was used
             to generate a backend with multiple API endpoints for user registration,
             sign-in, authentication, logout, posting, commenting and more.
             React and axios on the frontend are used to interact with the
             endpoints. Simply click on a post to generate a detailed view with comments.
             When a user is signed in they can create posts or reply to others by clicking
             on a comment. This service is run on an AWS EC2 server with an SQLite database. This project
             is still very early in development. Please use these credentials {user:DemoUser password:mpDP6E6idvonjVI3}"
            testLink="http://forum.cooperwebb.xyz"
            codeLink="https://github.com/CCWebb14/django-react-forum"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={BTC_CAD_thumbnail}
            title="Bitcoin to CAD converter"
            body="A bitcoin to Canadian dollar converter built using html, css and javascript.
             Enter the quantity you would like to convert
             and the output will be displayed above. This application functions by
             fetching bitcoins current price from coingeckos api."
            testLink="https://ccwebb14.github.io/bitcoin-cad-converter/"
            codeLink="https://github.com/CCWebb14/bitcoin-cad-converter"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={EAS_thumbnail}
            title="Etch-a-Sketch"
            body="An etch-a-sketch board built with html, css and javascript.
             Simply enter a square number for the size of board you would like to draw on. 
             Click and drag on the canvas to get started. Built for the Odin Projects curriculum."
            testLink="https://ccwebb14.github.io/Etch-a-Sketch/"
            codeLink="https://github.com/CCWebb14/Etch-a-Sketch"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={array_thumbnail}
            title="Array Game"
            body="An html, css and javascript game where the objective is to turn
             all of the lights on. The buttons on the left and top toggle all of the lights
             in its respective row, column or in a diagonal fashion.
             The buttons on the right will invert a horizontal sequence."
            testLink="https://ccwebb14.github.io/Array-Light-Game/"
            codeLink="https://github.com/CCWebb14/Array-Light-Game"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={RPS_thumbnail}
            title="Rock-Paper-Scissors"
            body="A simple html, css and javascript game of Rock Paper Scissors.
             Select your weapon of choice at the top and an output will be displayed below.
             First to 5 rounds wins! Built for the Odin Projects curriculum."
            testLink="https://ccwebb14.github.io/Rock-Paper-Scissors/"
            codeLink="https://github.com/CCWebb14/Rock-Paper-Scissors"
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ProjectCard
            imageLink={landing_page_thumbnail}
            title="Landing Page"
            body="A mockup html and css webpage. The was built to better understand
             css properties such as flexbox. 
             Built for the Odin Projects curriculum."
            testLink="https://ccwebb14.github.io/Landing-Page/"
            codeLink="https://github.com/CCWebb14/Landing-Page/tree/plain"
          />
        </Grid>
      </Grid>
    </Box>
  </>
);

export default Projects;
