// src/pages/Contact.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
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
            sx={{ mb: 2 }}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
