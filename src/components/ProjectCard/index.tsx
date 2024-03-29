import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@mui/material';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

type Entry = {
  imageLink: string;
  title: string;
  body: string;
  testLink: string;
  codeLink: string;
};

const ProjectCard = ({ imageLink, title, body, testLink, codeLink }: Entry) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imageLink;
    image.onload = () => {
      setLoading(false);
    };
  }, [imageLink]);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {loading ? (
        <Skeleton variant="rectangular" animation="wave" height={200} />
      ) : (
        <CardMedia
          component="img"
          height="200"
          image={imageLink}
          alt="no image available"
          sx={{ animation: `${fadeIn} 0.5s` }}
        />
      )}
      <CardContent sx={{ flexGrow: '1' }}>
        <>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={testLink}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<PlayArrowIcon />}
        >
          Test
        </Button>
        <Button
          size="small"
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<CodeIcon />}
        >
          Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
