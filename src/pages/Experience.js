// src/pages/Experience.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';

const Experience = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1">
          Experience
        </Typography>
        <Container>
            <Box sx={{ my: 4 }}>
            <Typography variant="h6" component="p" gutterBottom>
                SaskPower – Regina, Saskatchewan (in office), 2023
            </Typography>
            <ul>
                <li>Analyzed, designed, and developed applications using the latest technologies.</li>
                <li>Application UI design, JSON data modelling, bug fixing, and problem solving.</li>
                <li>Collaborative development using Git and Azure DevOps.</li>
                <li>Gathered functional requirements from external and/or internal customers and end-users.</li>
            </ul>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" component="p" gutterBottom>
                Metal Pros - Ottawa, Ontario, 2021-2022
            </Typography>
            <ul>
                <li>Prepared and organized shipments and orders in a fast-paced, ever-changing environment.</li>
                <li>Demonstrated advanced problem-solving, teamwork, and efficiency skills.</li>
                <li>Planned organization strategies for a new facility.</li>
            </ul>
            </Box>
        </Container>
      </ParallaxSection>
      
    </>
  );
};

export default Experience;
