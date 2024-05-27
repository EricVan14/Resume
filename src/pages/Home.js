// src/pages/Home.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Home = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Eric Van de Lande
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Software Developer
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          GitHub: <Link href="https://github.com/EricVan14" target="_blank">EricVan14</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
