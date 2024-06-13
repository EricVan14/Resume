import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ParallaxSection from '../components/ParallaxSection';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import image from '../assets/pics/arsenalAVIF.avif';

const EducationCard = ({ title, period, institution, courses, showCourses, setShowCourses, link }) => {
  return (
    <Card className="card-hover" sx={{ mb: 4, bgcolor: 'rgba(0, 0, 0, 0.8)', color: 'white', backdropFilter: 'blur(5px)' , borderRadius: '15px'}}>
      <CardContent>
        <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 2, borderRadius: 2, backdropFilter: 'blur(5px)' }}>
          <Typography className="skill-title" variant="h6" component="p" color='gray' gutterBottom id={link}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" component="p" className="skill-subtitle" gutterBottom sx={{ mt: 2 }}>
          {period}
          <br />
          {institution}
        </Typography>
        {courses && (
          <>
            <Button
              onClick={setShowCourses}
              className="skill-title"
              sx={{
                mb: 2,
                color: 'gray',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(5px)',
                fontSize: { xs: '0.75rem', md: '1rem' },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              {showCourses ? 'Hide Courses' : 'Show Courses'}
            </Button>
            {showCourses && (
              <Box sx={{ color: 'white', pl: 2 }}>
                {courses.map((course, index) => (
                  <Typography key={index} variant="body2" component="p">
                    {course}
                  </Typography>
                ))}
              </Box>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

const Education = () => {
  const [showChemCourses, setShowChemCourses] = useState(false);
  const [showCompCourses, setShowCompCourses] = useState(false);

  const chemicalCourses = [
    "CHG 1125 CHEMICAL ENG. FUNDAMENTALS",
    "CHG 2312 FLUID FLOW",
    "CHG 2314 HEAT TRANSFER OPERATIONS",
    "CHG 2317 INTRO CHEM PRO ANALYSIS DESIGN",
    "CHG 2324 FUND APP CHEM ENG THERMODYNAM.",
    "CHG 3127 CHEMICAL REACTION ENGINEERING",
    "CHG 3316 TRANSPORT PHENOMENA",
    "CHG 3335 PROCESS CONTROL",
    "CHG 3337 DATA COLLECTION AND INTERPRETA",
    "CHG 4359 Organic Electronics",
    "CHM 1311 PRINCIPLES OF CHEMISTRY",
    "CHM 1321 ORGANIC CHEMISTRY I",
    "CHM 2120 ORGANIC CHEMISTRY II",
    "CHM 2330 PHY CHEM: INT MOL PROP",
    "GNG 1105 ENGINEERING MECHANICS",
    "GNG 1106 ENGINEERING COMPUTATION",
    "ENG 1112 TECHNICAL REPORT WRITING",
    "GNG 2101 INTO PROD DEV & MGMT FOR EN/CS",
    "HIS 2129 TECH.,SOCIETY & ENV.SINCE 1800",
    "ECO 1192 ENGINEERING ECONOMICS",
  ];

  const computerCourses = [
    "CEG 2136 COMPUTER ARCHITECTURE I",
    "CEG 3185 INTRO DATA COMM. & NETWORKING",
    "CSI 2101 DISCRETE STRUCTURES",
    "CSI 2110 DATA STRUCTURES AND ALGORITHMS",
    "CSI 2120 PROGRAMMING PARADIGMS",
    "CSI 2132 DATABASES I",
    "CSI 2372 PROGRAMMING CONCEPTS WITH C++",
    "CSI 2911 PROFESSIONAL PRACTICE IN COMP",
    "CSI 3104 INTRO. FORMAL LANGUAGES",
    "CSI 3105 DESIGN ANALYSIS ALGORITHMS I",
    "CSI 3120 PROGRAMMING LANGUAGE CONCEPTS",
    "CSI 3131 OPERATING SYSTEMS",
    "CSI 3140 WWW STRUC. TECHN. & STANDARDS",
    "CSI 4106 INTRO. ARTIFICIAL INTELLIGENCE",
    "CSI 4107 INFO. RETRIEVAL AND INTERNET",
    "CSI 4108 CRYPTOGRAPHY",
    "CSI 4124 FOUND. MODELLING & SIMULATION",
    "CSI 4142 FUNDAMENTALS OF DATA SCIENCE",
    "CSI 4900 HONOURS PROJECT",
    "ECO 1104 INTRODUCTION TO MICROECONOMICS",
    "ITI 1100 DIGITAL SYSTEMS I",
    "ITI 1120 INTRODUCTION TO COMPUTING I",
    "ITI 1121 INTRODUCTION TO COMPUTING II",
    "MAT 1320 CALCULUS I",
    "MAT 1322 CALCULUS II",
    "MAT 1341 INTRO. TO LINEAR ALGEBRA",
    "MAT 1348 DISCRETE MATH FOR COMPUTING",
    "MAT 2322 CALCULUS III FOR ENGINEERS",
    "MAT 2377 PROB. & STATS. FOR ENGINEERS",
    "MAT 2384 ORDINARY DIFF EQ.& NUM. METHOD",
    "PHY 1122 FUNDAMENTALS OF PHYSICS II",
    "SEG 2105 INTRO TO SOFTWARE ENGINEERING",
    "SEG 3101 SOFTWARE REQUIREMENTS ANALYSIS",
    "SEG 3102 SOFTWARE DESIGN ARCHITECTURE",
  ];

  return (
    <>
      <ParallaxSection image={image}>
        <Container>
          <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', p: 2, borderRadius: 2, backdropFilter: 'blur(5px)' }}>
              <Typography variant="h1" component="h1" sx={{ pt: 10, pb: 4, color: 'white', textAlign: 'center' }}>
                Education
            </Typography>
          </Box>
          <Box sx={{ my: 4 }}>
            <EducationCard
              title="Bachelor of Science, Major in Computer Science"
              period="2021 - 2024"
              link="bsc"
              institution="University of Ottawa – Faculty of Engineering, Ottawa, Ontario"
              courses={computerCourses}
              showCourses={showCompCourses}
              setShowCourses={() => setShowCompCourses(!showCompCourses)}
            />
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <EducationCard
              title="Bachelor of Engineering, Major in Chemical Engineering (to Year 3A)"
              period="2018 - 2021"
              institution="University of Ottawa – Faculty of Engineering, Ottawa, Ontario"
              courses={chemicalCourses}
              showCourses={showChemCourses}
              setShowCourses={() => setShowChemCourses(!showChemCourses)}
            />
            <Divider sx={{ my: 2, borderColor: 'white' }} />
            <EducationCard
              title="Sir John A. Macdonald Secondary School – Waterloo, Ontario"
              period="2014 - 2018"
              institution="AP Program (advanced placement)"
              courses={null}
              showCourses={false}
              setShowCourses={null}
            />
          </Box>
        </Container>
      </ParallaxSection>
    </>
  );
};

export default Education;
