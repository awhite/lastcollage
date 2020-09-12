import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';


import { InputScreen, Button, ButtonContainer, BackButton } from '../components';
import { KEY_ENTER } from '../util/constants';

const Generate = () => {
  const history = useHistory();
  const { location } = history;

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  const onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        history.push('/load', { ...location.state });
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  return (
    <InputScreen title="Click the button to generate your collage">
      <ButtonContainer>
        <Button onClick={() => onSelectOption(KEY_ENTER)}>Generate</Button>
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default Generate;
