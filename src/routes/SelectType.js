import React from 'react';

import { InputScreen, Button } from '../components';
import { types, getTypeFromKey } from '../lastfm';
import { ColBackButton } from 'components/BackButton';

const SelectType = ({ navigation: { navigateNext, navigateBack } }) => {
  const onSelectOption = key => {
    navigateNext({ type: getTypeFromKey(key) });
  };

  return (
    <InputScreen title="Albums or Artists?" center>
      {types.map(({ title }, index) => <Button key={title} onClick={() => onSelectOption(index + 1)}>{title}</Button>)}
      <ColBackButton onClick={navigateBack} />
    </InputScreen>
  );
};

export default SelectType;
