import React, { useState } from 'react';
import { InputScreen, MainInput, Button } from '../components';
import { KEY_ENTER } from '../util/constants';
import { SelectTimespan } from '../routes';

const EnterUsername = ({ navigate }) => {
  const [username, setUsername] = useState('');

  const onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        navigate(SelectTimespan, { username });
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
      <Button
        onClick={() => onSelectOption(KEY_ENTER)}
        disabled={username === ''}
      >
        Next
      </Button>
    </InputScreen>
  );
};

export default EnterUsername;
