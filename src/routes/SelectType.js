import React from 'react';

import { InputScreen, Button } from '../components';
import { types, getTypeFromKey } from '../lastfm';

const SelectType = ({ navigation: { navigateNext } }) => {
  const onSelectOption = key => {
    navigateNext({ type: getTypeFromKey(key) });
  };

  return (
    <InputScreen title="Albums or Artists?" center>
      {types.map(({ title }, index) => <Button key={title} onClick={() => onSelectOption(index + 1)}>{title}</Button>)}
    </InputScreen>
  );
};

export default SelectType;
