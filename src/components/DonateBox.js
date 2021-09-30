import React from 'react';
import styled from 'styled-components';

import payPal from '../assets/paypal.svg';
import cashApp from '../assets/cash_app.svg';
import venmo from '../assets/venmo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-column: 2 / 2;
  grid-row: 2 / 2;
`;

const DonateBoxUl = styled.ul`
  padding: 1em;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  list-style: none;
  display: flex;
  width: max-content;
  margin: 0;

  & li {
    margin: 0;
  }

  & a {
    display: flex;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
  }

  & li {
    position: relative;
    transition: all 300ms ease-in-out;
  }

  & li:hover {
    transform: scale(1.2);
  }
`;

const DonateBox = () => (
  <Container>
    <DonateBoxUl>
      <li>
        <a href="https://paypal.me/alexwhiteca">
          <img height="36" src={payPal} alt="Donate with PayPal" />
        </a>
      </li>
      <li>
        <a href="https://www.venmo.com/u/awhite4096">
          <img height="36" src={cashApp} alt="Donate with Cash App" />
        </a>
      </li>
      <li>
        <a href="https://cash.app/$awhite4096">
          <img height="36" src={venmo} alt="Donate with Venmo" />
        </a>
      </li>
    </DonateBoxUl>
  </Container>
);

export default DonateBox;
