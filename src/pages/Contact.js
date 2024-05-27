// src/pages/Contact.js
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
        <Typography variant="h2" component="h1">
          Contact
        </Typography>
        <Container
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '8px',
            padding: '20px',
            mt: 4,
            width: '50%',
          }}
        >
          <Box sx={{ my: 4 }}>
            <Typography variant="body1" component="p" gutterBottom>
              Email: <a href="mailto:eric.vandelande@gmail.com">eric.vandelande@gmail.com</a>
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Phone: 519-635-3681
            </Typography>
            <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, backgroundColor: 'white' }}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, backgroundColor: 'white' }}
              />
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                sx={{ mb: 2, backgroundColor: 'white' }}
              />
              <Button variant="contained" color="primary" type="submit">
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
