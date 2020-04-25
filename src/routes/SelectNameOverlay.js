import React from 'react';

import { InputScreen, Button, BackButton, ButtonContainer } from '../components';

const SelectNameOverlay = ({ navigation: { navigateNext, navigateBack } }) => {

  return (
    <InputScreen title="Do you want to overlay the album and artist name on each cover?" center>
      <ButtonContainer>
        <Button onClick={() => navigateNext({ showName: 'true' })}>Yes</Button>
        <Button onClick={() => navigateNext({ showName: 'false' })}>No</Button>
        <BackButton onClick={navigateBack} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectNameOverlay;
