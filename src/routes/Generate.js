import React from 'react';
import { InputScreen, Button, ButtonContainer, BackButton } from '../components';
import { KEY_ENTER } from '../util/constants';

const Generate = ({ navigation: { navigateNext, navigateBack } }) => {
  const onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        // navigateNext({
        //   username: 'aaapwww',
        //   period: '1week',
        //   rowNum: '13',
        //   colNum: '5',
        //   type: 'albums',
        //   showName: false,
        //   hideMissing: true
        // });
        navigateNext({ type: 'albums' });
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  return (
    <InputScreen title="Click the button to generate your collage" center>
      <ButtonContainer>
        <Button onClick={() => onSelectOption(KEY_ENTER)}>Generate</Button>
        <BackButton onClick={navigateBack} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default Generate;
