import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';
import Typography from '@mui/material/Typography';

type Entry = {
  imageLink?: string;
  title: string;
  body: string;
};

const ProjectCard = ({ imageLink, title, body }: Entry) => (
  <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageLink}
        alt="no image available"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<PlayArrowIcon />}>
          Test
        </Button>
        <Button size="small" endIcon={<CodeIcon />}>
          Code
        </Button>
      </CardActions>
    </Card>
  </>
);

export default ProjectCard;
