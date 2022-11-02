import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, matchPath, useLocation } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'space-between',
  borderBottom: '1px solid #e8e8e8',
  marginTop: '10px',
});

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default function NavTabs() {
  const routeMatch = useRouteMatch(['/', '/projects', '/contact']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <StyledBox>
      <Tabs value={currentTab}>
        <Tab label="Home" value="/" to="/" component={Link} />
        <Tab
          label="Projects"
          value="/projects"
          to="/projects"
          component={Link}
        />
        <Tab label="Contact" value="/contact" to="/contact" component={Link} />
        <Tab
          icon={<CodeIcon />}
          href="https://github.com/CCWebb14/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Tabs>
    </StyledBox>
  );
}
