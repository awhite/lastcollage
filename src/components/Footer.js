import React from 'react';
import styled from 'styled-components';
import Copyright from './Copyright';
import DonateButton from './DonateButton';
import WhatsNewLink from './WhatsNewLink';

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

const Footer = ({ onClickWhatsNew }) => (
  <Container>
    <DonateButton />
    <WhatsNewLink onClick={onClickWhatsNew} />
    <Copyright />
  </Container>
);

export default Footer;
