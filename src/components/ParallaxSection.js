import React from 'react';
import Box from '@mui/material/Box';

const ParallaxSection = ({ image, children }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px',
        paddingBottom: '64px', 
      }}
    >
      {children}
    </Box>
  );
};

export default ParallaxSection;
