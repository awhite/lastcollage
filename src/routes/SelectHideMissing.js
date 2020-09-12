import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, Button, BackButton, ButtonContainer } from '../components';
import {
  TYPE_ALBUMS,
  TYPE_ARTISTS,
  TYPE_TRACKS
} from '../lastfm';

const options = [
  {
    hideMissing: 'true',
    text: 'Yes',
  },
  {
    hideMissing: 'false',
    text: 'No',
  },
]

const SelectHideMissing = () => {

  const history = useHistory();
  const { location } = history;

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  const onSelectOption = hideMissing => history.push('/generate', { ...location.state, hideMissing });

  const getTitle = () => {
    switch (location.state.type) {
      case TYPE_ALBUMS:
        return 'Do you want to hide albums with missing artwork?';
      case TYPE_ARTISTS:
        return 'Do you want to hide artists with missing artwork?';
      case TYPE_TRACKS:
        return 'Do you want to hide tracks with missing artwork?';
      default:
        throw new Error('Invalid type');
    }
  };

  return (
    <InputScreen title={getTitle()} center>
      <ButtonContainer>
        {options.map(({ hideMissing, text }) => (
          <Button key={hideMissing} onClick={() => onSelectOption(hideMissing)}>{text}</Button>
        ))}
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectHideMissing;
