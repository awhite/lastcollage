import React from 'react';
import styled from 'styled-components';
import Link from './FooterLink';

const Container = styled.div`
  padding-bottom: 10px;
`;

const WhatsNewLink = ({ onClick }) => (
  <Container>
    <Link href="#" onClick={onClick}>What's new?</Link>
  </Container>
);

export default WhatsNewLink;
