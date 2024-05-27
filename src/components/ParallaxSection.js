// src/components/ParallaxSection.js
import React from 'react';
import { Parallax } from 'react-parallax';
import Box from '@mui/material/Box';

const ParallaxSection = ({ image, children }) => {
  return (
    <Parallax bgImage={image} strength={500}>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
        }}
      >
        {children}
      </Box>
    </Parallax>
  );
};

export default ParallaxSection;
