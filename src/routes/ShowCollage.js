import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, FlexCol, Error, ResultDescription, Button, ButtonContainer } from '../components';
import styled from 'styled-components';

const CollageImg = styled.img`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 64px;
`;

const ShowCollage = () => {
  const history = useHistory();
  const { location } = history;

  if (!location.state || !location.state.username) return (
    <Redirect to="/" />
  );

  const generateFilename = () => {
    const { type, rowNum, colNum, period } = location.state;
    return `collage_${type}_${colNum}x${rowNum}_${period}.png`;
  };

  const startOver = () => {
    history.push('/');
  };

  const { imgUrl, err } = location.state;
  const filename = generateFilename();

  if (err) {
    return <Error error={err} startOver={startOver} />
  }

  return (
    <InputScreen>
      <FlexCol>
        <ResultDescription navigationParams={location.state} />
        <a href={imgUrl} download={filename}>
          <CollageImg crossOrigin="anonymous" src={imgUrl} className="img-responsive" />
        </a>
        <ButtonContainer>
          <StyledButton onClick={startOver}>Start Over</StyledButton>
        </ButtonContainer>
      </FlexCol>
    </InputScreen>
  );
};

export default ShowCollage;
