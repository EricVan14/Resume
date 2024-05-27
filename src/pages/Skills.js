// src/pages/Skills.js
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const skills = [
  'Java', 'Machine learning algorithms', 'Python', 'HTML', 'CSS', 'SQL',
  'Data staging, data analytics, and data mining', 'Windows based applications',
  'Node.js', 'Junit testing', 'Azure DevOps', 'Multi-threaded programming',
  'Info Retrieval using large language models', 'Android Studio', 'JavaScript',
  'C++', 'TypeScript', 'Angular', 'React', 'PostgreSQL', 'Software Architecture'
];

const Skills = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Skills
        </Typography>
        <List>
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Skills;
