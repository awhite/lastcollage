import React, { Component } from 'react';
import { InputScreen, FlexCol } from '../components';
import styled from 'styled-components';

const CollageImg = styled.img`
  width: 100%;
`;

export default class ShowCollage extends Component {
  render() {
    const { imgUrl } = this.props.navigationParams;
    const fileName = this.generateFileName();
    return (
      <InputScreen>
        <FlexCol>
          <a href={imgUrl} download={fileName}>
            <CollageImg crossOrigin="anonymous" src={imgUrl} className="img-responsive" />
          </a>
        </FlexCol>
      </InputScreen>
    );
  }

  generateFileName() {
    const { type, rowNum, colNum } = this.props.navigationParams;
    return `collage_${type}_${rowNum}x${colNum}.png`;
  }
}
