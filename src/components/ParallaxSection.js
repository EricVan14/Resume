import React from 'react';
import Box from '@mui/material/Box';

const ParallaxSection = ({ image, children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px',
        paddingBottom: '64px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)', 
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ParallaxSection;
