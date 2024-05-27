// src/pages/Home.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';

const Home = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1">
          Eric Van de Lande
        </Typography>
        <Typography variant="h5" component="p">
          Professional Developer and Cloud Specialist
        </Typography>
        <Typography variant="body1" component="p">
          GitHub: <Link href="https://github.com/EricVan14" target="_blank" color="inherit">EricVan14</Link>
        </Typography>
        <Container>
            <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to My Portfolio
            </Typography>
            <Typography variant="body1" component="p">
                This is the home page.
            </Typography>
            </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Home;
