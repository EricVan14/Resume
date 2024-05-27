import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: '#333', height: '100%', color: 'white' }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Eric Van de Lande
      </Typography>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} to="/skills">
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component={Link} to="/education">
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem button component={Link} to="/projects">
          <ListItemText primary="Projects" />
        </ListItem>
        <ListItem button component={Link} to="/experience">
          <ListItemText primary="Experience" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Eric Van de Lande
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/skills">Skills</Button>
            <Button color="inherit" component={Link} to="/education">Education</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/experience">Experience</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: '#333', color: 'white' },
        }}
      >
        {drawer}
      </Drawer>
      <Box sx={{ height: '64px' }} /> {/* Offset for the fixed navbar */}
    </Box>
  );
};

export default Navbar;
