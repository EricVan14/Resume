// src/pages/About.js
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

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <p>Detail your background, interests, and professional goals here.</p>
    </Container>
  );
};

export default About;
