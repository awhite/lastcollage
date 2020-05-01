import React from 'react';
import { Button, FlexCol, Bubble } from 'components';
import InputScreen from './InputScreen';

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
