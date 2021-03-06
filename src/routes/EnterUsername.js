import React, { useState } from 'react';

import { InputScreen, MainInput, Button, ButtonContainer } from '../components';
import { KEYCODE_ENTER } from '../util/constants';
import { useKeyButton } from 'hooks';
import { useHistory } from 'react-router-dom';

const EnterUsername = () => {
  const [username, setUsername] = useState('');
  const isFormFilled = () => username.trim() !== '';

  const history = useHistory();

  const onSelectOption = () => {
    if (!isFormFilled()) return;
    history.push('/type', { username });
  }

  useKeyButton(KEYCODE_ENTER, onSelectOption);

  const onChangeInput = ({ target: { value } }) => setUsername(value.trim().toLowerCase());

  return (
    <InputScreen title="Enter your Last.fm username">
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
