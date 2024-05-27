import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';
import tierListImage from '../assets/pics/tierlist.png';

const skills = [
  'Java', 'Machine learning algorithms', 'Python', 'HTML', 'CSS', 'SQL',
  'Data staging, data analytics, and data mining', 'Windows based applications',
  'Node.js', 'Junit testing', 'Azure DevOps', 'Multi-threaded programming',
  'Info Retrieval using large language models', 'Android Studio', 'JavaScript',
  'C++', 'TypeScript', 'Angular', 'React', 'PostgreSQL', 'Software Architecture'
];

const skillDescriptions = [
  "Java: Expertise in object-oriented programming, developing scalable and maintainable applications.",
  "Machine learning algorithms: Proficient in designing and implementing algorithms for predictive analytics and data-driven insights.",
  "Python: Skilled in scripting, automation, and data analysis using Python's extensive libraries.",
  "HTML, CSS: Proficient in building responsive and interactive web pages.",
  "SQL: Experienced in database design, querying, and data manipulation.",
  "Data staging, data analytics, and data mining: Expertise in processing and analyzing large datasets for actionable insights.",
  "Windows based applications: Skilled in developing applications tailored for Windows environments.",
  "Node.js: Proficient in building server-side applications and APIs.",
  "Junit testing: Experienced in writing and running automated tests for Java applications.",
  "Azure DevOps: Skilled in using Azure DevOps for CI/CD pipelines and project management.",
  "Multi-threaded programming: Proficient in developing applications that leverage concurrent processing.",
  "Info Retrieval using large language models: Expertise in utilizing large language models for information retrieval tasks.",
  "Android Studio: Skilled in developing native Android applications.",
  "JavaScript: Proficient in adding interactive elements to web pages.",
  "C++: Experienced in system programming and performance-critical applications.",
  "TypeScript: Skilled in building type-safe applications with TypeScript.",
  "Angular: Proficient in developing dynamic web applications using Angular.",
  "React: Skilled in building user interfaces with React.",
  "PostgreSQL: Experienced in using PostgreSQL for relational database management.",
  "Software Architecture: Proficient in designing and implementing scalable software systems."
];

const Skills = () => {
  return (
    <>
      <ParallaxSection image={image}>
        <Container>
          <Typography variant="h2" component="h1" sx={{ pt: 10, pb: 4 }}>
            Skills Tier List
          </Typography>
          <Box sx={{ my: 4 }}>
            <Box 
              component="img"
              sx={{
                mt: 4, 
                width: '100%', 
                maxWidth: 1000, 
                mx: 'auto', 
                display: 'block',
                mb: 4 
              }}
              src={tierListImage}
              alt="Tier List"
            />
            <Box sx={{ mt: 4 }}>
              {skillDescriptions.map((description, index) => (
                <Typography key={index} variant="body1" paragraph sx={{ mb: 2 }}>
                  {description}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Skills;
