import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';

const Contact = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1" sx={{ color: 'white', textAlign: 'center', mb: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
          Contact
        </Typography>
        <Container
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
            padding: { xs: '10px', md: '20px' },
            mt: 4,
            maxWidth: '600px',
            width: '100%',
          }}
        >
          <Box sx={{ my: 4}}>
            <Typography variant="body1" component="p" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Email: <a href="mailto:eric.vandelande@gmail.com">eric.vandelande@gmail.com</a>
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Phone: 519-635-3681
            </Typography>
            <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, backgroundColor: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, backgroundColor: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
              />
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                sx={{ mb: 2, backgroundColor: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
              />
              <Button variant="contained" color="primary" type="submit" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                Send
              </Button>
            </Box>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Contact;
