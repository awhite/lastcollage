import React from 'react';
import { InputScreen, FlexCol } from '../components';
import styled from 'styled-components';

const CollageImg = styled.img`
  width: 100%;
`;

const ShowCollage = ({ navigationParams }) => {
  const generateFilename = () => {
    const { type, rowNum, colNum } = navigationParams;
    return `collage_${type}_${rowNum}x${colNum}.png`;
  };

  const { imgUrl } = navigationParams;
  const filename = generateFilename();
  return (
    <InputScreen>
      <FlexCol>
        <a href={imgUrl} download={filename}>
          <CollageImg crossOrigin="anonymous" src={imgUrl} className="img-responsive" />
        </a>
      </FlexCol>
    </InputScreen>
  );
};

export default ShowCollage;
