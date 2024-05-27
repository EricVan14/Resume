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

const Contact = () => {
  return (
    <Container>
        <Title>Contact</Title>
        <p>Email: <a href="mailto:eric.vandelande@gmail.com">eric.vandelande@gmail.com</a></p>
        <p>Phone: 519-635-3681</p>
        <form action="mailto:eric.vandelande@gmail.com" method="post" enctype="text/plain">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
        </form>
    </Container>
  );
};

export default Contact;