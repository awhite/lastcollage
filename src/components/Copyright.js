import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-weight: 500;
  color: #aaa;
  letter-spacing: 0.25px;
`;

const Copyright = () => (
  <Container>
    Copyright &copy; Alex White {new Date().getFullYear()}
  </Container>
);

export default Copyright;
