import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavTabs from './components/NavigationBar';
import Home from './components/Home';
import Footer from './components/Footer';

const Wrapper = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Wrapper>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Wrapper>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
