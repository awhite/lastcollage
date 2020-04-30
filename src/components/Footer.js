import React from 'react';
import styled from 'styled-components';
import Copyright from './Copyright';
import DonateButton from './DonateButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 10px;
  text-align: center;
  padding-top: 30px;
`;

const Footer = () => (
  <Container>
    <DonateButton />
    <Copyright />
  </Container>
);

export default Footer;
