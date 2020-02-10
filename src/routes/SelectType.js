import React from 'react';
import { InputScreen, Button } from '../components';
import { Generate } from '../routes';
import { types, getTypeFromKey } from '../lastfm';

const SelectType = ({ navigate }) => {
  const onSelectOption = key => {
    navigate(Generate, { type: getTypeFromKey(key) });
  };

  return (
    <InputScreen title="Albums or Artists?" center>
      {types.map(({ title }, index) => <Button key={title} onClick={() => onSelectOption(index + 1)}>{title}</Button>)}
    </InputScreen>
  );
};

export default SelectType;
