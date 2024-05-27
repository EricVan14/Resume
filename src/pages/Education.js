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

const Education = () => {
  return (
    <Container>
        <Title>Education</Title>
        <p>University of Ottawa – Faculty of Engineering, Ottawa, Ontario<br />
           2021 - 2024<br />
           Bachelor of Science, Major in Computer Science</p>
        <p>University of Ottawa – Faculty of Engineering, Ottawa, Ontario<br />
           2018 - 2021<br />
           Bachelor of Engineering, Major in Chemical Engineering (to Year 3A)</p>
        <p>Sir John A. Macdonald Secondary School – Waterloo, Ontario<br />
           2014 - 2018<br />
           AP Program (advanced placement)</p>
    </Container>
  );
};

export default Education;