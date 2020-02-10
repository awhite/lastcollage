import React from 'react';
import { InputScreen, Button } from '../components';
import { KEY_YES, KEY_NO } from '../util/constants';
import { EnterUsername, CreateAccount } from '../routes';

const AccountPrompt = ({ navigate }) => {
  const onSelectOption = key => {
    switch (key) {
      case KEY_YES:
        navigate(EnterUsername);
        break;
      case KEY_NO:
        navigate(CreateAccount);
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  return (
    <InputScreen title="Do you have a Last.fm account?" center>
      <Button onClick={() => onSelectOption(KEY_YES)}>Yes</Button>
      <Button onClick={() => onSelectOption(KEY_NO)}>No</Button>
    </InputScreen>
  );
};

export default AccountPrompt;
