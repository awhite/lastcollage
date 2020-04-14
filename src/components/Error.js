import React from 'react';
import styled from 'styled-components';
import { dimRed } from 'styles';
import { Button } from 'components';

// https://codepen.io/sdthornton/pen/wBZdXq
const Bubble = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 64px;
  margin: 128px 48px;
  color: black;
`;

const Error = ({ error, startOver }) => (
  <div>
    <Bubble>
      <h1>An error occurred.</h1>
    </Bubble>
    <Button onClick={startOver}>Start Over</Button>
  </div>
);

export default Error;
