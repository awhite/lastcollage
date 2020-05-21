import React from 'react';
import styled from 'styled-components';
import InfoBubble from './InfoBubble';
import Button from './Button';
import FlexCol from './FlexCol';
import InputScreen from './InputScreen';

const Bubble = styled(InfoBubble)`
  margin-bottom: 48px;
`;

const Error = ({ message, startOver }) => (
  <InputScreen>
    <FlexCol>
      <Bubble>
        <h1>An error occurred</h1>
        <h3>{message}</h3>
      </Bubble>
      <Button onClick={startOver}>Start Over</Button>
    </FlexCol>
  </InputScreen>
);

export default Error;
