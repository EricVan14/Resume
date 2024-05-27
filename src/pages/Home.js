// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Eric Van de Lande</Title>
      <p>Professional Developer and Cloud Specialist</p>
      <p>GitHub: <Link href="https://github.com/EricVan14">EricVan14</Link></p>
    </Container>
  );
};

export default Home;
