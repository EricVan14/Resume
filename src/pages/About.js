// src/pages/About.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';

const About = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1">
          About Me
        </Typography>
        <Container>
            <Box sx={{ my: 4 }}>
            <Typography variant="body1" component="p">

            </Typography>
            </Box>
        </Container>
      </ParallaxSection>
      
    </>
  );
};

export default About;
