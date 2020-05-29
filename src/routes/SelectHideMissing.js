import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, Button, BackButton, ButtonContainer } from '../components';

const SelectHideMissing = () => {

  const history = useHistory();
  const { location } = history;

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  return (
    <InputScreen title="Do you want to hide albums with missing artwork?">
      <ButtonContainer>
        <Button onClick={() => history.push('/generate', { ...location.state, hideMissing: 'true' })}>Yes</Button>
        <Button onClick={() => history.push('/generate', { ...location.state, hideMissing: 'false' })}>No</Button>
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectHideMissing;
