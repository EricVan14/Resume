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

const Projects = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ color: 'white', mb: 4 }}>
          Projects
        </Typography>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              Honours Project (with Prof M. Garzon)
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ color: 'white' }}>
              Detection of Tor/VPN/Proxy traffic in Web access logs using ML, 2024
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Created algorithms for feature extraction/selection." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Created supervised machine learning model using python-scikit learn and Random Forest classifier." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Detects Tor traffic within PCAP files at 97% accuracy." sx={{ color: 'white' }} />
              </ListItem>
            </List>
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              Course Booking App
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ color: 'white' }}>
              Created using Android Studio, 2022
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Allows different user types to login and enroll in/assign themselves as a student or professor to different university classes (using SQL)." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Allows planning out schedules." sx={{ color: 'white' }} />
              </ListItem>
            </List>
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <Typography variant="h6" component="p" gutterBottom sx={{ color: 'white' }}>
              FUT Draft App
            </Typography>
            <Typography variant="body1" component="p" gutterBottom sx={{ color: 'white' }}>
              Personal project, 2022
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Game made in Android Studio and based off the video game FIFA." sx={{ color: 'white' }} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Allows players to select a team of real soccer players complete with stats, ratings, and chemistry points." sx={{ color: 'white' }} />
              </ListItem>
            </List>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Projects;
