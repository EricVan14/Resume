// src/pages/Education.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Education = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Education
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          University of Ottawa – Faculty of Engineering, Ottawa, Ontario
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          2021 - 2024<br />
          Bachelor of Science, Major in Computer Science
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" component="p" gutterBottom>
          University of Ottawa – Faculty of Engineering, Ottawa, Ontario
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          2018 - 2021<br />
          Bachelor of Engineering, Major in Chemical Engineering (to Year 3A)
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" component="p" gutterBottom>
          Sir John A. Macdonald Secondary School – Waterloo, Ontario
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          2014 - 2018<br />
          AP Program (advanced placement)
        </Typography>
      </Box>
    </Container>
  );
};

export default Education;