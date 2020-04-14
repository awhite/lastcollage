import React from 'react';
import { InputScreen, Button } from '../components';
import { KEY_ENTER } from '../util/constants';

const Generate = ({ navigation: { navigateNext } }) => {
  const onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        // navigate(LoadCollage, {
        //   username: 'aaapwww',
        //   period: '1week',
        //   rowNum: '13',
        //   colNum: '5',
        //   type: 'albums',
        //   showName: false,
        //   hideMissing: true
        // });
        navigateNext();
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  return (
    <InputScreen title="Click the button to generate your collage" center>
      <Button onClick={() => onSelectOption(KEY_ENTER)}>Generate</Button>
    </InputScreen>
  );
};

export default Generate;
