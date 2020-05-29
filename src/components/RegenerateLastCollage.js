import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { SubText, FlexCol, Button, CollageDescription } from '.';
import ButtonContainer from './ButtonContainer';

const Container = styled(FlexCol)`
  margin-top: 64px;
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
      <ButtonContainer>
        <StyledButton outlined onClick={generate}>Regenerate</StyledButton>
      </ButtonContainer>
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
