import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, Button, BackButton, ButtonContainer } from '../components';

const SelectNameOverlay = () => {

  const history = useHistory();
  const { location } = history;

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  return (
    <InputScreen title="Do you want to overlay the album and artist name on each cover?">
      <ButtonContainer>
        <Button onClick={() => history.push('/hideMissing', { ...location.state, showName: 'true' })}>Yes</Button>
        <Button onClick={() => history.push('/hideMissing', { ...location.state, showName: 'false' })}>No</Button>
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectNameOverlay;
