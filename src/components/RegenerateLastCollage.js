import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { SubText, FlexCol, Button, CollageDescription } from '.';

const Container = styled(FlexCol)`
  margin-top: 48px;
`;

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

const RegenerateLastCollage = ({ info }) => {
  const {
    username,
    period,
    rowNum,
    colNum,
    type,
    showName
  } = info;

  const history = useHistory();

  const generate = () => history.push('/load', info);

  return (
    <Container>
      <SubText>or regenerate your last collage</SubText>
      <StyledButton outlined onClick={generate}>Regenerate</StyledButton>
      <SubText>(<CollageDescription
        username={username}
        period={period}
        rowNum={rowNum}
        colNum={colNum}
        type={type}
        showName={showName}
      />)</SubText>
    </Container>
  );
}

export default RegenerateLastCollage;
