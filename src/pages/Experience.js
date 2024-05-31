import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ParallaxSection from '../components/ParallaxSection';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import image from '../assets/pics/arsenalAVIF.avif';

const ExperienceCard = ({ title, description, skills, link }) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === `#${link}`) {
      const collapsibleSection = document.getElementById(link).querySelector('.collapsible-section');
      if (collapsibleSection) {
        collapsibleSection.style.display = 'block';
      }
    }
  }, [link]);

  return (
    <Card sx={{ mb: 4, bgcolor: 'rgba(0, 0, 0, 0.5)', color: 'white', backdropFilter: 'blur(5px)' }}>
      <CardContent id={link}>
        <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 2, borderRadius: 2, backdropFilter: 'blur(5px)' }}>
          <Typography variant="h6" component="p" gutterBottom>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" component="p" gutterBottom sx={{ mt: 2 }}>
          {description}
        </Typography>
        {skills && (
          <>
            <Typography variant="h6" component="p" gutterBottom sx={{ mt: 2 }}>
              Skills Used:
            </Typography>
            <Grid container spacing={1}>
              {skills.map((skill, index) => (
                <Grid item key={index}>
                  <Chip label={skill} sx={{ color: 'white', bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
};


const Experience = () => {
  const experienceData = [
    {
      title: 'SaskPower – Regina, Saskatchewan (in office), 2023',
      link: 'saskpower',
      description: `
        Analyzed, designed, and developed applications using the latest technologies.
        Application UI design, JSON data modelling, bug fixing, and problem solving.
        Collaborative development using Git and Azure DevOps.
        Gathered functional requirements from external and/or internal customers and end-users.
      `,
      skills: [
        'JavaScript',
        'Python',
        'TypeScript',
        'Node.js',
        'React',
        'HTML',
        'CSS',
        'JSON',
        'Vue.js',
        'Angular',
        'Azure DevOps',
        'Github'
      ]
    },
    {
      title: 'Metal Pros - Ottawa, Ontario, 2021-2022',
      description: `
        Prepared and organized shipments and orders in a fast-paced, ever-changing environment.
        Demonstrated advanced problem-solving, teamwork, and efficiency skills.
        Planned organization strategies for a new facility.
      `,
      skills: [
        'Teamwork',
        'Problem Solving',
        'Efficiency',
        'Fast Paced Environment'
      ]
    }
  ];

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
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                description={experience.description}
                skills={experience.skills}
                link={experience.link}
              />
            ))}
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Experience;
