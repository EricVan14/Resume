import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ParallaxSection from '../components/ParallaxSection';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import image from '../assets/pics/arsenalAVIF.avif';

const ProjectCard = ({ title, description, skills, link }) => {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === `#${link}`) {
      setShowInfo(true);
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
        <Box sx={{ mt: 2 }}>
          <Button
            onClick={() => setShowInfo(!showInfo)}
            sx={{
              mb: 2,
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(5px)',
              fontSize: { xs: '0.75rem', md: '1rem' },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            {showInfo ? 'Hide Info' : 'Show Info'}
          </Button>
        </Box>
        {showInfo && (
          <Typography variant="body2" component="p" gutterBottom sx={{ mt: 2 }}>
            {description}
          </Typography>
        )}
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
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: 'Honours Project (with Prof M. Garzon)',
      link: 'honours-project',
      description: (
        <>
          <Typography variant="body2" component="p" paragraph>
            In the rapidly evolving digital landscape, the increasing volume and complexity of internet traffic present significant challenges for network security. As the internet becomes an indispensable communication network, the need for robust security measures that can handle large data streams and adapt to changing patterns in real time has never been more critical.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            Simultaneously, the battle to protect user privacy and anonymity continues, with technologies such as The Onion Router (Tor) network at the forefront of this effort. While Tor offers invaluable services for privacy-conscious users, it also serves as a sanctuary for malicious activities, often hindering efforts to maintain online security and order. Recognizing the need for privacy and the equally important demand for security, this project aims to create a safer environment for all internet users alike.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The motivation for this project stems from the limitations of existing traffic classification methods—many of which suffer from low accuracy, high false positive rates, and inadequate efficiency. Building upon previous research, this project leverages the advancements in machine learning to develop a sophisticated model capable of accurately identifying Tor traffic. By utilizing a Correlation-based Feature Selection (CFS) and a Random Forest classifier, the project aims to offer a significant improvement over traditional techniques, both in terms of accuracy and computational performance.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            To tackle these challenges, the following methodology was implemented, consisting of data collection, preprocessing, feature generation, model training, and testing. The data was curated from the ISCX-Tor-NonTor-2017 Dataset, provided by the Canadian Institute for Cybersecurity, which presented a balanced mix of Tor and non-Tor PCAP files. A Python script was created to extract and compute an array of packet features, followed by another script to perform feature selection which is an important process to isolate the most indicative features of Tor traffic. The feature selection process involved calculating the merit of feature subsets using priority queues and a backtracking mechanism to refine the feature set, ensuring the model was trained on data that fully covered the complex patterns of Tor traffic.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            Central to the project's success was the construction of a machine learning pipeline, culminating in a Random Forest model that showed an impressive accuracy rate. This model was then encapsulated within a user-friendly web application, providing a simple interface for users to upload PCAP files and receive analysis on potential Tor traffic within. This comprehensive report outlines the entire development process, from the conception of the idea to the realization of a fully functional machine learning model.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The ISCX-Tor-NonTor-2017 Dataset provided by the Canadian Institute for Cybersecurity was utilized. It offers a balanced collection of Tor and non-Tor PCAP files, facilitating a robust training environment for the ML model. The data was cleansed and transformed to ensure compatibility with the ML algorithms. Non-numeric values were converted to floats, and any instances of non-finite values were removed to maintain dataset integrity.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            A custom script was developed to extract features from packet headers within PCAP files, producing a structured dataset in CSV format. Features such as packet sizes, timing, and protocol types were included to capture the essence of Tor traffic behavior. A Random Forest classifier was trained using a subset of features identified by the CFS algorithm. Data scaling was applied, and the dataset was split into training and testing sets to evaluate the model's performance.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The application of the feature selection algorithm yielded a feature set optimized for our Random Forest model. This selection process directly contributed to achieving a high model accuracy, evidenced by our test results that demonstrated a consistent 97% accuracy rate. The chosen features captured the essence of Tor traffic patterns, allowing for precise and reliable traffic classification. The high accuracy of the model suggests a promising approach to detecting Tor traffic. However, the project's scope was limited to pre-existing datasets, and future work should involve real-world data for further validation.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The web application demonstrates the model's potential for practical use, providing a user-friendly interface for analyzing PCAP files and identifying Tor traffic with high confidence levels.
          </Typography>
        </>
      ),
      skills: ['AI', 'Machine learning (Random Forest)', 'Python', 'Wireshark', 'JavaScript', 'HTML', 'CSS', 'Node']
    },
    {
      title: 'Data Mining Project (Global Emissions Effect on Global Temperature Change)',
      link: 'data-mining-project',
      description: (
        <>
          <Typography variant="body2" component="p" paragraph>
            This project involves analyzing the relationship between global emissions and temperature changes. Using data from multiple sources, the project integrates global temperature data with annual emissions data by country to identify patterns in climate change and assess the impact of different types of emissions on yearly temperature variations.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The preprocessing involved many steps including: encoding and melting, year extraction and filtering, handling different data types and ranges, data cleaning, data transformation, and feature engineering. The project utilized datasets such as GlobalLandTemperaturesByCountry.csv and AnnualSurfaceTemperatureChange.csv to perform an in-depth analysis of the relationship between greenhouse gas emissions and temperature changes by country. The analysis addressed key data quality issues, ensuring that subsequent analysis could proceed on a clean, well-structured dataset.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The project applied feature selection techniques to identify the variables most predictive of yearly temperature change. Feature selection was performed using a RandomForestRegressor to identify the most influential predictors for the model. For evaluation metrics, the root mean square error (RMSE) was selected as the main metric, accompanied by the construction time (CT) of each model. The Random Forest model exhibited the highest accuracy with the lowest RMSE of 0.0010.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The project also included a component for detecting outliers using the One-Class SVM algorithm. The results provided a basis for further investigation into the causes of these anomalies.
          </Typography>
        </>
      ),
      skills: ['Python', 'NumPy', 'Pandas', 'Data mining', 'SQL', 'PostgreSQL']
    },
    {
      title: 'E-Hotels Web App',
      link: 'e-hotels-web-app',
      description: (
        <>
          <Typography variant="body2" component="p" paragraph>
            This web application allows users to book hotels and provides an admin interface to manage bookings and view information about customers and bookings. The project involved creating a relational database schema and developing a frontend to interact with the database, ensuring robust data management and user-friendly interactions.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The database schema includes tables for headquarters, hotels, rooms, employees, customers, and bookings, with appropriate primary and foreign keys to ensure data integrity. The frontend application allows customers to book rooms, while admins can manage hotel information, view customer details, and oversee bookings.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The project was completed as part of the uOttawa CSI 2132 course's final project, demonstrating the ability to design and implement a comprehensive web application from database design to frontend development.
          </Typography>
        </>
      ),
      skills: ['Node', 'JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Simulation Project',
      link: 'simulation-project',
      description: (
        <>
          <Typography variant="body2" component="p" paragraph>
            This project develops a predictive framework for queueing systems, focusing on the probability of a customer being blocked. Using logistic regressions and weighted least squares regressions, the project aims to build a model that accurately predicts customer blockages in service-oriented environments like customer service centers.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The simulation is designed to capture the intricacies of a queueing system, considering factors that influence customer interactions, including arrival rates, service times, capacities, and feedback mechanisms. The research methodology involves the application of logistic regressions and weighted least squares regressions, emphasizing the calculation of the probability of a customer being blocked by the system at different time intervals, with a limited number of servers.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The project's significance lies in its ability to provide a nuanced understanding of queueing system behavior, allowing for precise predictions regarding customer blockages. By doing so, it contributes to informed decision-making and optimization of system performance. The simulation generates sample path data, which includes whether arrivals are blocked or not, the system's state at each time step, and the corresponding arrival times.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The project also includes an analysis of predictive model accuracy and steady-state probability estimation, providing valuable insights for optimizing queueing systems.
          </Typography>
        </>
      ),
      skills: ['Python', 'NumPy', 'Sci-Kit Learn']
    },
    {
      title: 'Course Booking App',
      link: 'course-booking-app',
      description: (
        <>
          <Typography variant="body2" component="p" paragraph>
            Created using Android Studio, this app allows different user types to login and enroll in/assign themselves as a student or professor to different university classes. The app also allows users to plan out schedules and provides an admin interface for managing user accounts and courses.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            Students can search for a course by course code, course name, and course days. Instructors can also perform searches but cannot search by days. Both types of users can enable the filter “my courses”, which displays only courses they are enrolled in or instructing. If a student clicks on an individual course, there is the option to enroll or unenroll from that course.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            In the instructor interface, selecting a course brings up a menu displaying various options and information such as course name, course code, description, capacity, days, and times. If the course does not have an instructor, the instructor can assign themselves to it. If the user is already the course instructor, they can modify the parameters, view a list of all enrolled students, as well as remove themselves as the instructor should they so choose.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The administrator interface allows managing user accounts, and also creating and deleting courses. All fields are appropriately validated, and there exist error messages for incorrect formatting.
          </Typography>
        </>
      ),
      skills: ['Android Studio', 'Java', 'SQL']
    },
    {
      title: 'FUT Draft App',
      link: 'fut-draft-app',
      description: (
        <>
          <Typography variant="body2" component="p" paragraph>
            This game app, developed in Android Studio, allows players to create teams of famous soccer players from top leagues. Players can compete solo or in split screen mode against a friend. The game includes stats, ratings, and chemistry points for players, and a leaderboard to track high scores.
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            The app is inspired by the FUT draft game mode in the video game FIFA. All players have different stats and ratings and link together differently for endless possibilities of teams. You can play solo and also split screen against a friend. At the end of the game, the winner is determined by who had more rating and chemistry in their team. If playing solo, you can try and set a high score, with a leaderboard that keeps track of your best scores.
          </Typography>
        </>
      ),
      skills: ['Android Studio', 'Java']
    }
  ];

  return (
    <>
      <ParallaxSection image={image}>
        <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ color: 'white', mb: 4 }}>
          Projects
        </Typography>
        <Container>
          <Box sx={{ my: 4 }}>
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                skills={project.skills}
                link={project.link}
              />
            ))}
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Projects;
