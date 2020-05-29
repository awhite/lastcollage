import React from 'react';

import { InputScreen, Button, BackButton, ButtonContainer } from '../components';
import { periods, getPeriodFromKey } from '../lastfm';
import { useHistory, Redirect } from 'react-router-dom';

const SelectTimespan = () => {
  const history = useHistory();
  const { location } = history;

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  const onSelectOption = key => {
    history.push('/size', { ...location.state, period: getPeriodFromKey(key) });
  };

  return (
    <InputScreen title="How long do you want this collage to span?">
      <ButtonContainer>
        {periods.map(({ title }, index) => (
          <Button key={title} onClick={() => onSelectOption(index + 1)}>{title}</Button>
        ))}
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectTimespan;
