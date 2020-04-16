import React, { useState } from 'react';

import { InputScreen, MainInput, Button, ButtonContainer } from '../components';
import { KEYCODE_ENTER } from '../util/constants';
import { useKeyButton } from 'hooks';

const EnterUsername = ({ navigation: { navigateNext, navigateBack } }) => {
  const [username, setUsername] = useState('');
  const isFormFilled = () => username.trim() !== '';

  const onSelectOption = () => {
    if (!isFormFilled()) return;
    navigateNext({ username });
  }

  useKeyButton(KEYCODE_ENTER, onSelectOption);

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
        <Button
          onClick={onSelectOption}
          disabled={!isFormFilled()}
        >
          Next
        </Button>
      </ButtonContainer>
    </InputScreen>
  );
};

export default EnterUsername;
