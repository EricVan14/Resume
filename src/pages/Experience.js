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
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            color: 'white',
            mb: 4,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Experience
        </Typography>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              sx={{
                color: 'white',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              SaskPower – Regina, Saskatchewan (in office), 2023
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Analyzed, designed, and developed applications using the latest technologies."
                  sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Application UI design, JSON data modelling, bug fixing, and problem solving."
                  sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Collaborative development using Git and Azure DevOps."
                  sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Gathered functional requirements from external and/or internal customers and end-users."
                  sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
                />
              </ListItem>
            </List>
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              sx={{
                color: 'white',
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Metal Pros - Ottawa, Ontario, 2021-2022
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Prepared and organized shipments and orders in a fast-paced, ever-changing environment."
                  sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Demonstrated advanced problem-solving, teamwork, and efficiency skills."
                  sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Planned organization strategies for a new facility."
                  sx={{ color: 'white', fontSize: { xs: '1rem', md: '1.25rem' } }}
                />
              </ListItem>
            </List>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Experience;
