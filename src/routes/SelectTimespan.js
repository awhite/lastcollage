import React from 'react';

import { InputScreen, Button } from '../components';
import { periods, getPeriodFromKey } from '../lastfm';

const SelectTimespan = ({ navigation: { navigateNext } }) => {
  const onSelectOption = key => {
    navigateNext({ period: getPeriodFromKey(key) });
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
