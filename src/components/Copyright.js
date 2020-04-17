import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 500;
  color: #aaa;
`;

const Copyright = () => (
  <Container>
    Copyright &copy; Alex White {new Date().getFullYear()}
  </Container>
);

export default Copyright;
