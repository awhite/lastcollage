import React from 'react';
import { InputScreen, Button } from '../components';
import { SelectSize } from '../routes';
import { periods, getPeriodFromKey } from '../lastfm';

const SelectTimespan = ({ navigate }) => {
  const onSelectOption = key => {
    navigate(SelectSize, { period: getPeriodFromKey(key) });
  };

  return (
    <InputScreen title="How long do you want this collage to span?" center>
      {periods.map(({ title }, index) => (
        <Button key={title} onClick={() => onSelectOption(index + 1)}>{title}</Button>
      ))}
    </InputScreen>
  );
};

export default SelectTimespan;
