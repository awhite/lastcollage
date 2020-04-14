import React from 'react';
import { InputScreen, FlexCol } from '../components';
import styled from 'styled-components';

const CollageImg = styled.img`
  width: 100%;
`;

const ShowCollage = ({ navigation: { navigationParams } }) => {
  const generateFilename = () => {
    const { type, rowNum, colNum } = navigationParams;
    return `collage_${type}_${rowNum}x${colNum}.png`;
  };

  const { imgUrl, err } = navigationParams;
  const filename = generateFilename();

  console.log(imgUrl);

  if (err) {
    if (!err.response) return err.message;
    switch (err.response.status) {
      case 400:
        return 'There was an error with your request. Please reload the page and try again.';
      default:
        return 'Something went wrong. Please try again.';
    }
  }

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
