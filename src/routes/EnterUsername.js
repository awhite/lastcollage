import React, { useState } from 'react';

import { InputScreen, MainInput, Button, BackButton, ButtonContainer } from '../components';
import { KEY_ENTER } from '../util/constants';

const EnterUsername = ({ navigation: { navigateNext, navigateBack } }) => {
  const [username, setUsername] = useState('');

  const onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        navigateNext({ username });
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  const onChangeInput = ({ target: { value } }) => setUsername(value);

  return (
    <InputScreen title="Enter your Last.fm username" center>
      <MainInput
        center
        placeholder="Username"
        value={username}
        onChange={onChangeInput}
      />
      <ButtonContainer>
        <BackButton onClick={navigateBack} />
        <Button
          onClick={() => onSelectOption(KEY_ENTER)}
          disabled={username === ''}
        >
          Next
        </Button>
      </ButtonContainer>
    </InputScreen>
  );
};

export default EnterUsername;
