import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';

const Education = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
          Education
        </Typography>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              University of Ottawa – Faculty of Engineering, Ottawa, Ontario
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ color: 'white' }}>
              2021 - 2024<br />
              Bachelor of Science, Major in Computer Science
            </Typography>
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              University of Ottawa – Faculty of Engineering, Ottawa, Ontario
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ color: 'white' }}>
              2018 - 2021<br />
              Bachelor of Engineering, Major in Chemical Engineering (to Year 3A)
            </Typography>
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              Sir John A. Macdonald Secondary School – Waterloo, Ontario
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ color: 'white' }}>
              2014 - 2018<br />
              AP Program (advanced placement)
            </Typography>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Education;
