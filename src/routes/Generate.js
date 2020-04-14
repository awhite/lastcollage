import React from 'react';
import { InputScreen, Button } from '../components';
import { KEY_ENTER } from '../util/constants';
import { ColBackButton } from 'components/BackButton';

const Generate = ({ navigation: { navigateNext, navigateBack } }) => {
  const onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        navigateNext({
          username: 'aaapwww',
          period: '1week',
          rowNum: '13',
          colNum: '5',
          type: 'albums',
          showName: false,
          hideMissing: true
        });
        // navigateNext();
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  return (
    <InputScreen title="Click the button to generate your collage" center>
      <Button onClick={() => onSelectOption(KEY_ENTER)}>Generate</Button>
      <ColBackButton onClick={navigateBack} />
    </InputScreen>
  );
};

export default Generate;
