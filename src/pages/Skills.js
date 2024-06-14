import React, { useState  } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Slider from 'react-slick';
import ParallaxSection from '../components/ParallaxSection';
import image from '../assets/pics/arsenalAVIF.avif';
import '../styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';  

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
    title: "Java",
    description: "Expertise in object-oriented programming, developing scalable and maintainable applications. Used extensively at SaskPower, in the Course Booking App, FUT Draft App, and for school assignments.",
    image: javaImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "Course Booking App", link: "/Resume/#/projects" },
      { name: "FUT Draft App", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "JavaScript",
    description: "Proficient in adding interactive elements to web pages. Used at SaskPower, in the E-Hotels Web App, Honours Project, and for school assignments.",
    image: jsImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "E-Hotels Web App", link: "/Resume/#/projects" },
      { name: "Honours Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Python",
    description: "Skilled in scripting, automation, and data analysis using Python's extensive libraries. Used in the Honours Project, Data Mining Project, Simulation Project, and for school assignments.",
    image: pythonImage,
    places: [
      { name: "Honours Project", link: "/Resume/#/projects" },
      { name: "Data Mining Project", link: "/Resume/#/projects" },
      { name: "Simulation Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "C++",
    description: "Experienced in system programming and performance-critical applications. Used for school assignments.",
    image: cppImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "XML",
    description: "Proficient in working with XML for data representation. Used for school assignments.",
    image: xmlImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "AJAX",
    description: "Proficient in using AJAX for asynchronous web development. Used for school assignments.",
    image: ajaxImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "SQL",
    description: "Experienced in database design, querying, and data manipulation. Used in the E-Hotels Web App, Course Booking App, Data Mining Project, and for school assignments.",
    image: sqlImage,
    places: [
      { name: "E-Hotels Web App", link: "/Resume/#/projects" },
      { name: "Course Booking App", link: "/Resume/#/projects" },
      { name: "Data Mining Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "C",
    description: "Experienced in system programming and low-level application development. Used for school assignments.",
    image: cImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "CSS",
    description: "Proficient in building responsive and interactive web pages. Used at SaskPower, in the E-Hotels Web App, Honours Project, and for school assignments.",
    image: cssImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "E-Hotels Web App", link: "/Resume/#/projects" },
      { name: "Honours Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "HTML",
    description: "Proficient in building responsive and interactive web pages. Used at SaskPower, in the E-Hotels Web App, Honours Project, and for school assignments.",
    image: htmlImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "E-Hotels Web App", link: "/Resume/#/projects" },
      { name: "Honours Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "JSON",
    description: "Proficient in working with JSON for data exchange. Used at SaskPower, in the Honours Project, Course Booking App, and for school assignments.",
    image: jsonImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "Honours Project", link: "/Resume/#/projects" },
      { name: "Course Booking App", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Go",
    description: "Proficient in building applications with Go. Used for school assignments.",
    image: goImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "PHP",
    description: "Experienced in building dynamic web applications using PHP. Used for school assignments.",
    image: phpImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "R",
    description: "Skilled in statistical computing and graphics using R. Used for school assignments.",
    image: rImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "TypeScript",
    description: "Skilled in building type-safe applications with TypeScript. Used at SaskPower.",
    image: typescriptImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" }
    ]
  },
  {
    title: "React",
    description: "Skilled in building user interfaces with React. Used in personal projects, at SaskPower, and for various school assignments.",
    image: reactImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Spring Boot",
    description: "Skilled in developing applications using Spring Boot. Used for school assignments.",
    image: springbootImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Vue.js",
    description: "Proficient in building user interfaces with Vue.js. Used at SaskPower and for school assignments.",
    image: vuejsImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Node.js",
    description: "Proficient in building server-side applications and APIs. Used at SaskPower, in the E-Hotels Web App, and Honours Project.",
    image: nodejsImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "E-Hotels Web App", link: "/Resume/#/projects" },
      { name: "Honours Project", link: "/Resume/#/projects" }
    ]
  },
  {
    title: "Angular",
    description: "Proficient in developing dynamic web applications using Angular. Used at SaskPower and for school assignments.",
    image: angularImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Android Studio",
    description: "Skilled in developing native Android applications. Used in the Course Booking App, FUT Draft App, and for school assignments.",
    image: androidStudioImage,
    places: [
      { name: "Course Booking App", link: "/Resume/#/projects" },
      { name: "FUT Draft App", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "GitHub",
    description: "Proficient in using GitHub for version control and collaboration. Used at SaskPower, in the E-Hotels Web App, Honours Project, and Data Mining Project.",
    image: githubImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" },
      { name: "E-Hotels Web App", link: "/Resume/#/projects" },
      { name: "Honours Project", link: "/Resume/#/projects" },
      { name: "Data Mining Project", link: "/Resume/#/projects" }
    ]
  },
  {
    title: "Azure DevOps",
    description: "Skilled in using Azure DevOps for CI/CD pipelines and project management. Used at SaskPower.",
    image: azureDevopsImage,
    places: [
      { name: "SaskPower", link: "/Resume/#/experience" }
    ]
  },
  {
    title: "Wireshark",
    description: "Experienced in packet captures using Wireshark. Used in the Honours Project and for school assignments.",
    image: wiresharkImage,
    places: [
      { name: "Honours Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Kubernetes",
    description: "Proficient in using Kubernetes for container orchestration. Used for school assignments.",
    image: kubernetesImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "Docker",
    description: "Skilled in using Docker for containerization. Used for school assignments.",
    image: dockerImage,
    places: [
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "AWS",
    description: "Proficient in using AWS for cloud computing.",
    image: awsImage,
    places: []
  },
  {
    title: "PostgreSQL",
    description: "Experienced in using PostgreSQL for relational database management. Used in the E-Hotels Web App, Course Booking App, Data Mining Project, and for school assignments.",
    image: postgresImage,
    places: [
      { name: "E-Hotels Web App", link: "/Resume/#/projects" },
      { name: "Course Booking App", link: "/Resume/#/projects" },
      { name: "Data Mining Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  },
  {
    title: "MongoDB",
    description: "Experienced in using MongoDB for NoSQL database management.",
    image: mongoDBImage,
    places: []
  },
  {
    title: "Ruby on Rails",
    description: "Skilled in developing applications using Ruby on Rails.",
    image: rubyOnRailsImage,
    places: []
  },
  {
    title: "Data Mining",
    description: "Expertise in processing and analyzing large datasets for actionable insights. Used in the Data Mining Project and for school assignments.",
    image: dataMiningImage,
    places: [
      { name: "Data Mining Project", link: "/Resume/#/projects" },
      { name: "Bachelor of Science, Major in Computer Science", link: "/Resume/#/education" }
    ]
  }
];

const skillCategories = [
  {
    category: 'Languages',
    skills: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [15, 16, 17, 18, 19, 20]
  },
  {
    category: 'Tools & Platforms',
    skills: [30, 21, 22, 23, 24, 25, 26, 27, 28, 29]
  }
];

const Skills = () => {
  const initialSelectedSkills = skillCategories.map(category => skillData[category.skills[0]]);
  const [selectedSkills, setSelectedSkills] = useState(initialSelectedSkills);

  const handleSkillClick = (categoryIndex, skillIndex) => {
    const newSelectedSkills = [...selectedSkills];
    newSelectedSkills[categoryIndex] = skillData[skillIndex];
    setSelectedSkills(newSelectedSkills);
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowLeft class="arrows" style={{ color: "white" }} />
      </div>
    )
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowRight class="arrows" style={{ color: "white" }} />
      </div>
    )
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <ParallaxSection image={image}>
        <Container>
          <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 2, borderRadius: 2, backdropFilter: 'blur(5px)' }}>
            <Typography variant="h1" component="h1" sx={{ pt: 10, pb: 4, color: 'white', textAlign: 'center' }}>
              Skills
            </Typography>
          </Box>
          <Box sx={{ my: 4 }}>
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="card-hover" sx={{ display: 'flex', marginBottom: '40px', background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)', borderRadius: '15px', overflow: 'visible' }}>
                <Box sx={{ width: '47%', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: 2, backdropFilter: 'blur(5px)' }}>
                  <Typography variant="h4" component="h2" className="skill-title" sx={{ mb: 2, color: 'gray' }}>
                    {category.category}
                  </Typography>
                  <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: 2, backdropFilter: 'blur(5px)'  }}>
                    <Typography variant="h6" component="h2" className='skill-subtitle' sx={{ mb: 2, color: '#1772da' , margin: '5px'}}>
                      {selectedSkills[categoryIndex].title}
                    </Typography>
                    <Typography variant="body2" className="skill-title" sx={{ color: 'darkgray' , margin: '5px'}}>
                      {selectedSkills[categoryIndex].description}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" className='skill-subtitle' sx={{ mt: 2, color: '#1772da' , margin: '5px'}}>
                    Places Used:
                  </Typography>
                  <ul>
                    {selectedSkills[categoryIndex].places.map((place, index) => (
                      <li key={index}>
                        <Link to={place.link} style={{ color: 'white' , margin: '5px'}}>{place.name}</Link>
                      </li>
                    ))}
                  </ul>
                </Box>
                <CardContent sx={{ width: '53%' }}>
                  <Slider {...settings}>
                    {category.skills.map((skillIndex) => {
                      const skill = skillData[skillIndex];
                      return skill ? (
                        <Box
                          key={skillIndex}
                          className="skill-box"
                          sx={{
                            padding: '10px',
                            cursor: 'pointer',
                            position: 'relative',
                            height: '150px',
                            width: '150px',
                            margin: '10px'
                          }}
                          onClick={() => handleSkillClick(categoryIndex, skillIndex)}
                        >
                          <Box
                            component="img"
                            sx={{
                              width: '90%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: '8px'
                            }}
                            src={skill.image}
                            alt={skill.title}
                          />
                        </Box>
                      ) : null;
                    })}
                  </Slider>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Skills;