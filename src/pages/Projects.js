// src/pages/Projects.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Projects = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Honours Project (with Prof M. Garzon)
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Detection of Tor/VPN/Proxy traffic in Web access logs using ML, 2024
        </Typography>
        <ul>
          <li>Created algorithms for feature extraction/selection.</li>
          <li>Created supervised machine learning model using python-scikit learn and Random Forest classifier.</li>
          <li>Detects Tor traffic within PCAP files at 97% accuracy.</li>
        </ul>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" component="p" gutterBottom>
          Course Booking App
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Created using Android Studio, 2022
        </Typography>
        <ul>
          <li>Allows different user types to login and enroll in/assign themselves as a student or professor to different university classes (using SQL).</li>
          <li>Allows planning out schedules.</li>
        </ul>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" component="p" gutterBottom>
          FUT Draft App
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Personal project, 2022
        </Typography>
        <ul>
          <li>Game made in Android Studio and based off the video game FIFA.</li>
          <li>Allows players to select a team of real soccer players complete with stats, ratings, and chemistry points.</li>
        </ul>
      </Box>
    </Container>
  );
};

export default Projects;
