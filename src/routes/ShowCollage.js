import React from 'react';

import { InputScreen, FlexCol, Error, ResultDescription, Button } from '../components';
import styled from 'styled-components';

const CollageImg = styled.img`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 64px;
`;

const ShowCollage = ({ navigation: { navigationParams, resetNavigation } }) => {
  const generateFilename = () => {
    const { type, rowNum, colNum } = navigationParams;
    return `collage_${type}_${colNum}x${rowNum}.png`;
  };

  const { imgUrl, err } = navigationParams;
  const filename = generateFilename();

  if (err) {
    return <Error error={err} startOver={resetNavigation} />
  }

  return (
    <InputScreen>
      <FlexCol>
        <ResultDescription navigationParams={navigationParams} />
        <a href={imgUrl} download={filename}>
          <CollageImg crossOrigin="anonymous" src={imgUrl} className="img-responsive" />
        </a>
        <StyledButton onClick={resetNavigation}>Start Over</StyledButton>
      </FlexCol>
    </InputScreen>
  );
};

export default ShowCollage;
