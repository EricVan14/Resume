import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Projects = () => {
  return (
    <Container>
        <Title>Projects</Title>
        <h3>Honours Project</h3>
        <p>Detection of Tor/VPN/Proxy traffic in Web access logs using ML, 2024</p>
        <ul>
          <li>Created algorithms for feature extraction/selection.</li>
          <li>Created supervised machine learning model using python-scikit learn and Random Forest classifier.</li>
          <li>Detects Tor traffic within PCAP files at 97% accuracy.</li>
        </ul>
        <h3>Course Booking App</h3>
        <p>Created using Android Studio, 2022</p>
        <ul>
          <li>Allows different user types to login and enroll in/assign themselves as a student or professor to different university classes (using SQL).</li>
          <li>Allows planning out schedules.</li>
        </ul>
        <h3>FUT Draft App</h3>
        <p>Personal project, 2022</p>
        <ul>
          <li>Game made in Android Studio and based off the video game FIFA.</li>
          <li>Allows players to select a team of real soccer players complete with stats, ratings, and chemistry points.</li>
        </ul>
    </Container>
  );
};

export default Projects;