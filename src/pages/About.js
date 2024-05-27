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
        <Typography variant="h2" component="h1" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          About Me
        </Typography>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="body1" component="p" sx={{ color: 'white' }}>
              {/* Add your content here */}
            </Typography>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default About;
