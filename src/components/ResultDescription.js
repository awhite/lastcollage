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
} }) => {
  const periodName = periods.find(({ key }) => key === period).title.toLowerCase();
  const typeName = types.find(({ key }) => key === type).title.toLowerCase();
  const dimensions = `${colNum} x ${rowNum}`;
  const forever = period === 'forever';

  return (
    <Container>
      <span>
        <strong>{dimensions}</strong> collage of top <strong>{typeName}</strong> for <strong>{username}</strong>
        {!forever && (
          <> in the past <strong>{periodName}</strong></>
        )}
      </span>
    </Container>
  );
};

export default ResultDescription;
