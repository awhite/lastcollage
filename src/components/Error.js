import React from 'react';
import styled from 'styled-components';
import { Button, FlexCol } from 'components';
import InputScreen from './InputScreen';

// https://codepen.io/sdthornton/pen/wBZdXq
const Bubble = styled.div`
  align-self: stretch;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 64px;
  margin: 0 48px 96px;
  color: black;
`;

const Error = ({ error, startOver }) => (
  <InputScreen>
    <FlexCol>
      <Bubble>
        <h1>An error occurred.</h1>
      </Bubble>
      <Button onClick={startOver}>Start Over</Button>
    </FlexCol>
  </InputScreen>
);

export default Error;
