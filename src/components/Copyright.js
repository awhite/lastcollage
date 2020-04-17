import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 10px;
  text-align: center;
  font-weight: 500;
  color: #aaa;
  letter-spacing: 0.25px;
  padding-top: 30px;
`;

const Copyright = () => (
  <Container>
    Copyright &copy; Alex White {new Date().getFullYear()}
  </Container>
);

export default Copyright;
