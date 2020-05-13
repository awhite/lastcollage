import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, FlexCol, Error, ResultDescription, Button, ButtonContainer } from '../components';
import styled from 'styled-components';

const CollageImg = styled.img`
  width: 100%;
`;

const CollageDisplay = ({ imgUrl, downloadPath, filename, downloadDisabled, onClick }) => {
  if (downloadDisabled) return renderImg();
  return (
    <a href={downloadPath} download={filename} onClick={onClick}>
      {renderImg()}
    </a>
  );

  function renderImg() {
    return (
      <picture>
        <source srcset={imgUrl} type="image/webp" />
        <source srcset={downloadPath} type="image/png" />
        <CollageImg crossOrigin="anonymous" src={downloadPath} className="img-responsive" alt="Collage (click to download)" />
      </picture>
    );
  }
}

const StyledButton = styled(Button)`
  margin-top: 64px;
`;

const ShowCollage = () => {
  const history = useHistory();
  const { location } = history;

  const [haveClickedDownload, setHaveClickedDownload] = useState(false);

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

  const { imgUrl, downloadPath, err } = location.state;
  const filename = generateFilename();

  if (err) {
    return <Error error={err} startOver={startOver} />
  }

  const onClickDownload = () => {
    setHaveClickedDownload(true);
    setTimeout(() => setHaveClickedDownload(false), 5000);
  };

  return (
    <InputScreen>
      <FlexCol>
        <ResultDescription navigationParams={location.state} />
        <CollageDisplay imgUrl={imgUrl} downloadPath={downloadPath} filename={filename} downloadDisabled={haveClickedDownload} onClick={onClickDownload} />
        <ButtonContainer>
          <StyledButton onClick={startOver}>Start Over</StyledButton>
        </ButtonContainer>
      </FlexCol>
    </InputScreen>
  );
};

export default ShowCollage;
