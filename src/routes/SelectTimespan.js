import React from 'react';

import { InputScreen, Button, BackButton, ButtonContainer } from '../components';
import { periods, getPeriodFromKey } from '../lastfm';

const SelectTimespan = ({ navigation: { navigateNext, navigateBack } }) => {
  const onSelectOption = key => {
    navigateNext({ period: getPeriodFromKey(key) });
  };

  return (
    <InputScreen title="How long do you want this collage to span?" center>
      <ButtonContainer>
        {periods.map(({ title }, index) => (
          <Button key={title} onClick={() => onSelectOption(index + 1)}>{title}</Button>
        ))}
        <BackButton onClick={navigateBack} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectTimespan;
