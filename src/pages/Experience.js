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

const Experience = () => {
  return (
    <Container>
        <Title>Experience</Title>
        <h3>SaskPower – Regina, Saskatchewan (in office), 2023</h3>
        <ul>
          <li>Analyzed, designed, and developed applications using the latest technologies.</li>
          <li>Application UI design, JSON data modelling, bug fixing, and problem solving.</li>
          <li>Collaborative development using Git and Azure DevOps.</li>
          <li>Gathered functional requirements from external and/or internal customers and end-users.</li>
        </ul>
        <h3>Metal Pros - Ottawa, Ontario, 2021-2022</h3>
        <ul>
          <li>Prepared and organized shipments and orders in a fast-paced, ever-changing environment.</li>
          <li>Demonstrated advanced problem-solving, teamwork, and efficiency skills.</li>
          <li>Planned organization strategies for a new facility.</li>
        </ul>
    </Container>
  );
};

export default Experience;