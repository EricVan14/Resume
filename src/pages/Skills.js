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

const Skills = () => {
  return (
    <Container>
        <Title>Skills</Title>
        <ul>
          <li>Java</li>
          <li>Machine learning algorithms</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>Data staging, data analytics, and data mining</li>
          <li>Windows based applications</li>
          <li>Node.js</li>
          <li>Junit testing</li>
          <li>Azure DevOps</li>
          <li>Multi-threaded programming</li>
          <li>Info Retrieval using large language models</li>
          <li>Android Studio</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>React</li>
          <li>PostgreSQL</li>
          <li>Software Architecture</li>
        </ul>
    </Container>
  );
};

export default Skills;