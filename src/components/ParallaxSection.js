// src/components/ParallaxSection.js
import React from 'react';
import Box from '@mui/material/Box';

const ParallaxSection = ({ image, children }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px', // Ensure padding to accommodate the fixed navbar
        paddingBottom: '64px', // Extra padding at the bottom
      }}
    >
      {children}
    </Box>
  );
};

export default ParallaxSection;
