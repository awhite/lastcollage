import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, Button, BackButton, ButtonContainer } from '../components';
import { types } from '../lastfm';

const SelectType = () => {

  const history = useHistory();
  const { location } = history;

  if (!location.state) return (
    <Redirect to="/" />
  );

  const onSelectOption = type => history.push('/timespan', { ...location.state, type });

  return (
    <InputScreen title="What kind of collage?" center>
      <ButtonContainer>
        {types.map(({ key, title }) => (
          <Button key={key} onClick={() => onSelectOption(key)}>{title}</Button>))}
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectType;
