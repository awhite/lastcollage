import React from 'react';
import styled from 'styled-components';

import { periods, types } from '../lastfm';
import InfoBubble from './InfoBubble';

const Container = styled(InfoBubble)`
  margin: 0 16px 48px;
  font-size: 2rem;
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
