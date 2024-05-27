import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ParallaxSection from '../components/ParallaxSection';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import image from '../assets/pics/arsenalAVIF.avif';

const Experience = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ color: 'white', mb: 4 }}>
          Experience
        </Typography>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              SaskPower – Regina, Saskatchewan (in office), 2023
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Analyzed, designed, and developed applications using the latest technologies." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Application UI design, JSON data modelling, bug fixing, and problem solving." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Collaborative development using Git and Azure DevOps." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Gathered functional requirements from external and/or internal customers and end-users." sx={{ color: 'white' }} />
              </ListItem>
            </List>
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              Metal Pros - Ottawa, Ontario, 2021-2022
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Prepared and organized shipments and orders in a fast-paced, ever-changing environment." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Demonstrated advanced problem-solving, teamwork, and efficiency skills." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Planned organization strategies for a new facility." sx={{ color: 'white' }} />
              </ListItem>
            </List>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Experience;
