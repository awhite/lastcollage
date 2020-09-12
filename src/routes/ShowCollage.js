import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, Error, ResultDescription, Button, ButtonContainer } from '../components';
import styled from 'styled-components';
import { isPeriodInterval } from '../lastfm';
import { formatUnixForFile } from '../util';

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
    let periodStr = period;
    if (isPeriodInterval(period)) {
      periodStr = `${formatUnixForFile(period.start)}_${formatUnixForFile(period.end)}`;
    }
    return `collage_${type}_${colNum}x${rowNum}_${periodStr}.png`;
  };

  const startOver = () => {
    history.push('/');
  };

  const { imgUrl, downloadPath, errorMessage } = location.state;
  const filename = generateFilename();

  if (errorMessage) {
    return <Error message={errorMessage} startOver={startOver} />
  }

  const onClickDownload = () => {
    setHaveClickedDownload(true);
    setTimeout(() => setHaveClickedDownload(false), 5000);
  };

  return (
    <InputScreen>
      <ResultDescription navigationParams={location.state} />
      <CollageDisplay imgUrl={imgUrl} downloadPath={downloadPath} filename={filename} downloadDisabled={haveClickedDownload} onClick={onClickDownload} />
      <ButtonContainer>
        <StyledButton onClick={startOver}>Start Over</StyledButton>
      </ButtonContainer>
    </InputScreen>
  );
};

export default ShowCollage;
