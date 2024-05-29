import React, { useRef, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';
import '../styles.css';

// Import skill images
import reactImage from '../assets/skills/REACT.png';
import javaImage from '../assets/skills/JAVA.webp';
import jsImage from '../assets/skills/JAVASCRIPT.png';
import htmlImage from '../assets/skills/HTML.png';
import pythonImage from '../assets/skills/PYTHON.png';
import githubImage from '../assets/skills/GITHUB.png';
import cssImage from '../assets/skills/CSS.png';
import aiImage from '../assets/skills/AI.jpg';
import sqlImage from '../assets/skills/SQL.png';
import nodejsImage from '../assets/skills/njs.png';
import postgresImage from '../assets/skills/POSTGRES.jfif';
import jsonImage from '../assets/skills/json.png';
import azureDevopsImage from '../assets/skills/azure.png';
import dataMiningImage from '../assets/skills/datamining.png';
import typescriptImage from '../assets/skills/ts.png';
import androidStudioImage from '../assets/skills/as.jfif';
import angularImage from '../assets/skills/ANGULAR.png';
import cppImage from '../assets/skills/CPLUSPLUS.png';
import xmlImage from '../assets/skills/xml.png';
import goImage from '../assets/skills/go.png';
import springbootImage from '../assets/skills/spring.jfif';
import phpImage from '../assets/skills/php.png';
import ajaxImage from '../assets/skills/ajax.png';
import cImage from '../assets/skills/c.png';
import rImage from '../assets/skills/r.jfif';
import kubernetesImage from '../assets/skills/kubernetes.png';
import dockerImage from '../assets/skills/docker.png';
import dotnetImage from '../assets/skills/NET.png';
import wiresharkImage from '../assets/skills/wireshark.jfif';
import vuejsImage from '../assets/skills/vue.png';
import rubyOnRailsImage from '../assets/skills/rr.png';
import awsImage from '../assets/skills/aws.jfif';
import mongoDBImage from '../assets/skills/mongo.png';

const skillData = [
  { 
    title: "React", 
    description: "Skilled in building user interfaces with React.", 
    image: reactImage, 
    places: ["Personal Projects", "Workplace A", "School"]
  },
  { 
    title: "Java", 
    description: "Expertise in object-oriented programming, developing scalable and maintainable applications.", 
    image: javaImage, 
    places: ["Workplace B", "School"]
  },
  { 
    title: "JavaScript", 
    description: "Proficient in adding interactive elements to web pages.", 
    image: jsImage, 
    places: ["Personal Projects", "Workplace A", "School"]
  },
  { 
    title: "HTML", 
    description: "Proficient in building responsive and interactive web pages.", 
    image: htmlImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "Python", 
    description: "Skilled in scripting, automation, and data analysis using Python's extensive libraries.", 
    image: pythonImage, 
    places: ["Personal Projects", "Workplace C", "School"]
  },
  { 
    title: "GitHub", 
    description: "Proficient in using GitHub for version control and collaboration.", 
    image: githubImage, 
    places: ["Personal Projects", "Workplace A", "Workplace B"]
  },
  { 
    title: "CSS", 
    description: "Proficient in building responsive and interactive web pages.", 
    image: cssImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "AI", 
    description: "Proficient in designing and implementing algorithms for predictive analytics and data-driven insights.", 
    image: aiImage, 
    places: ["Personal Projects", "Workplace D"]
  },
  { 
    title: "SQL", 
    description: "Experienced in database design, querying, and data manipulation.", 
    image: sqlImage, 
    places: ["Personal Projects", "Workplace E", "School"]
  },
  { 
    title: "Node.js", 
    description: "Proficient in building server-side applications and APIs.", 
    image: nodejsImage, 
    places: ["Personal Projects", "Workplace A"]
  },
  { 
    title: "PostgreSQL", 
    description: "Experienced in using PostgreSQL for relational database management.", 
    image: postgresImage, 
    places: ["Personal Projects", "Workplace E"]
  },
  { 
    title: "JSON", 
    description: "Proficient in working with JSON for data exchange.", 
    image: jsonImage, 
    places: ["Personal Projects", "Workplace A", "School"]
  },
  { 
    title: "Azure DevOps", 
    description: "Skilled in using Azure DevOps for CI/CD pipelines and project management.", 
    image: azureDevopsImage, 
    places: ["Workplace F"]
  },
  { 
    title: "Data Mining", 
    description: "Expertise in processing and analyzing large datasets for actionable insights.", 
    image: dataMiningImage, 
    places: ["Personal Projects", "Workplace G"]
  },
  { 
    title: "TypeScript", 
    description: "Skilled in building type-safe applications with TypeScript.", 
    image: typescriptImage, 
    places: ["Personal Projects", "Workplace A"]
  },
  { 
    title: "Android Studio", 
    description: "Skilled in developing native Android applications.", 
    image: androidStudioImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "Angular", 
    description: "Proficient in developing dynamic web applications using Angular.", 
    image: angularImage, 
    places: ["Personal Projects", "Workplace A"]
  },
  { 
    title: "C++", 
    description: "Experienced in system programming and performance-critical applications.", 
    image: cppImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "XML", 
    description: "Proficient in working with XML for data representation.", 
    image: xmlImage, 
    places: ["Personal Projects", "Workplace A", "School"]
  },
  { 
    title: "Go", 
    description: "Proficient in building applications with Go.", 
    image: goImage, 
    places: ["Personal Projects"]
  },
  { 
    title: "Spring Boot", 
    description: "Skilled in developing applications using Spring Boot.", 
    image: springbootImage, 
    places: ["Personal Projects", "Workplace B"]
  },
  { 
    title: "PHP", 
    description: "Experienced in building dynamic web applications using PHP.", 
    image: phpImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "AJAX", 
    description: "Proficient in using AJAX for asynchronous web development.", 
    image: ajaxImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "C", 
    description: "Experienced in system programming and low-level application development.", 
    image: cImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "R", 
    description: "Skilled in statistical computing and graphics using R.", 
    image: rImage, 
    places: ["Personal Projects", "School"]
  },
  { 
    title: "Kubernetes", 
    description: "Proficient in using Kubernetes for container orchestration.", 
    image: kubernetesImage, 
    places: ["Workplace H"]
  },
  { 
    title: "Docker", 
    description: "Skilled in using Docker for containerization.", 
    image: dockerImage, 
    places: ["Workplace H"]
  },
  { 
    title: "Wireshark", 
    description: "Experienced in packet captures using wireshark", 
    image: wiresharkImage, 
    places: ["Personal Projects", "Workplace I"]
  },
  { 
    title: ".NET", 
    description: "Experienced in developing applications using the .NET framework.", 
    image: dotnetImage, 
    places: ["Personal Projects", "Workplace I"]
  },
  { 
    title: "Vue.js", 
    description: "Proficient in building user interfaces with Vue.js.", 
    image: vuejsImage, 
    places: ["Personal Projects"]
  },
  { 
    title: "Ruby on Rails", 
    description: "Skilled in developing applications using Ruby on Rails.", 
    image: rubyOnRailsImage, 
    places: ["Personal Projects"]
  },
  { 
    title: "AWS", 
    description: "Proficient in using AWS for cloud computing.", 
    image: awsImage, 
    places: ["Workplace J"]
  },
  { 
    title: "MongoDB", 
    description: "Experienced in using MongoDB for NoSQL database management.", 
    image: mongoDBImage, 
    places: ["Personal Projects", "Workplace A"]
  }
];
const tierList = [
  { label: "Wizard", color: "blue", skills: [0, 1, 2, 3, 4] },
  { label: "Skilled", color: "green", skills: [5, 6, 7, 8, 9, 10, 11, 12] },
  { label: "I'm Good", color: "greenyellow", skills: [13, 14, 15, 16, 17, 18, 19] },
  { label: "Some Experience", color: "darkgoldenrod", skills: [20, 21, 22, 23, 24, 25, 26, 27, 29] },
  { label: "Next to Learn", color: "darkmagenta", skills: [28, 30, 31, 32] },
];

const Skills = () => {
  const tierListRef = useRef(null);

  useEffect(() => {
    // Bind Fancybox to elements with data-fancybox attribute
    window.Fancybox.bind("[data-fancybox]", {});
  }, []);

  const handleClick = (index) => {
    const skill = skillData[index];
    const placesList = skill.places.map(place => `<li>${place}</li>`).join('');

    window.Fancybox.show([
      {
        src: `
          <div style="background-color: white; padding: 40px; border: 1px solid #ccc; border-radius: 12px; width: 600px; max-width: 90%; height: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="margin-top: 0; font-size: 28px; color: #333;">${skill.title}</h2>
            <p style="font-size: 18px; color: #666;">${skill.description}</p>
            <h3 style="font-size: 20px; color: #333;">Places Used:</h3>
            <ul style="font-size: 16px; color: #666; list-style-type: disc; padding-left: 20px;">
              ${placesList}
            </ul>
            <button onclick="window.Fancybox.close()" style="margin-top: 20px; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #007bff; border: none; border-radius: 4px; cursor: pointer;">Close</button>
          </div>`,
        type: "html",
      },
    ], {
      baseClass: "fancybox-custom",
      afterShow: (fancybox, slide) => {
        const tierListElement = tierListRef.current;
        const tierListRect = tierListElement.getBoundingClientRect();
        const modal = document.querySelector(".fancybox__container");
        const modalRect = modal.getBoundingClientRect();

        modal.style.top = `${tierListRect.top + window.scrollY + (tierListRect.height / 2) - (modalRect.height / 2)}px`;
        modal.style.left = `${tierListRect.left + window.scrollX + (tierListRect.width / 2) - (modalRect.width / 2)}px`;
        modal.style.transform = "none";
      }
    });
  };

  return (
    <>
      <ParallaxSection image={image}>
        <Container>
          <Typography variant="h2" component="h1" sx={{ pt: 10, pb: 4, color: 'white', textAlign: 'center' }}>
            Skills Tier List
          </Typography>
          <Typography variant="h6" component="p" sx={{ pt: 2, color: 'white', textAlign: 'center' }}>
            Try clicking on a skill to see more information about my experience with it.
          </Typography>
          <Box ref={tierListRef} sx={{ 
  my: 4, 
  backgroundColor: 'dimgray', 
  padding: '10px', 
  borderRadius: '8px', 
  position: 'relative',
  border: '2px solid black' // Added border
}}>
  {tierList.map((tier, tierIndex) => (
    <Box key={tierIndex} sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      marginBottom: '20px', 
      backgroundColor: 'dimgray', 
      borderBottom: '2px solid #333', 
      flexWrap: 'wrap',
      paddingBottom: '10px' // Added padding to separate from bottom border
    }}>
      <Box
            sx={{
              width: { xs: 80, sm: 100 }, // Adjust the width based on screen size
              height: { xs: 80, sm: 100 }, // Adjust the height based on screen size
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: tier.color,
              marginRight: '10px',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '10px' // Added margin to separate from images
            }}
          >
            {tier.label}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {tier.skills.map((skillIndex) => (
              <Box
                key={skillIndex}
                className="skill-box"
                sx={{ 
                  width: { xs: 80, sm: 100 }, 
                  height: { xs: 80, sm: 100 }, 
                  cursor: 'pointer', 
                  position: 'relative',
                  marginBottom: '10px', // Added margin to separate from bottom border
                  marginTop: '10px' // Added margin to separate from top border
                }}
                onClick={() => handleClick(skillIndex)}
              >
                <Box
                  component="img"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  src={skillData[skillIndex].image}
                  alt={skillData[skillIndex].title}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Skills;
