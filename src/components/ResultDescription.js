import React from 'react';
import styled from 'styled-components';

import { grey, lightGrey } from '../styles';
import { periods, types } from '../lastfm';

const Container = styled.div`
  border-radius: 4px;
  margin: 0 16px 48px;
  font-size: 2rem;
  padding: 24px;
  background: ${lightGrey};
  color: ${grey};
`;

const ResultDescription = ({ navigationParams: {
  username,
  period,
  rowNum,
  colNum,
  type,
  showName,
  hideMissing,
} }) => {
  const periodName = periods.find(({ key }) => key === period).title.toLowerCase();
  const typeName = types.find(({ key }) => key === type).title.toLowerCase();
  const dimensions = `${colNum} x ${rowNum}`;

  return (
    <Container>
      <strong>{dimensions}</strong> collage of top <strong>{typeName}</strong> for <strong>{username}</strong>
      {period !== 'forever' && (
        <> in the past <strong>{periodName}</strong></>
      )}
    </Container>
  );
}

export default ResultDescription;
