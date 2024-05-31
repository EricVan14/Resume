import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';
import profilePic from '../assets/pics/Profile.png';
import muiLogo from '../assets/logos/mui.png';
import nodelogo from '../assets/logos/nodejs.png';
import reactLogo from '../assets/logos/react.png';
import jsLogo from '../assets/logos/javascript.png';
import fancyapps from '../assets/logos/fancy.png';

const Home = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Box sx={{ textAlign: 'center', color: 'white', p: { xs: 2, md: 4 } }}>
          <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2rem', md: '4rem' } }}>
            Eric van de Lande
          </Typography>
          <Typography variant="h5" component="p" sx={{ fontSize: { xs: '1rem', md: '2rem' }, mb: 2 }}>
            Developer 
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 4 }}>
            GitHub: <Link href="https://github.com/EricVan14" target="_blank" color="inherit">EricVan14</Link>
          </Typography>
        </Box>
        <Container>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box sx={{ width: { xs: '100%', md: '30%' }, textAlign: 'left', mb: { xs: 4, md: 0 } }}>
              <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                Welcome to My Portfolio
              </Typography>
              <Typography variant="body1" component="p" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                This is the home page.
              </Typography>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '30%' }, textAlign: 'center', mb: { xs: 4, md: 0 } }}>
              <img src={profilePic} alt="Eric Van de Lande" style={{ width: '100%', borderRadius: '50%', maxWidth: '200px' }} />
            </Box>
            <Box sx={{ width: { xs: '100%', md: '30%' }, textAlign: { xs: 'center', md: 'right' } }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.75rem' } }}>
                Made With
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'space-around' }, alignItems: 'center' }}>
                <img src={reactLogo} alt="React" style={{ width: '25%', maxWidth: '100px', height: 'auto', margin: '0.5rem' }} />
                <img src={jsLogo} alt="JavaScript" style={{ width: '30%', maxWidth: '120px', height: 'auto', margin: '0.5rem' }} />
                <img src={nodelogo} alt="Node" style={{ width: '30%', maxWidth: '120px', height: 'auto', margin: '0.5rem' }} />
                <img src={muiLogo} alt="Material-UI" style={{ width: '25%', maxWidth: '100px', height: 'auto', margin: '0.5rem' }} />
                <img src={fancyapps} alt="Fancy Apps" style={{ width: '25%', maxWidth: '100px', height: 'auto', margin: '0.5rem' }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Home;
