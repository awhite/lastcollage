import React from 'react';

import { periods, types } from '../lastfm';

const CollageDescription = ({
  username,
  period,
  rowNum,
  colNum,
  showName,
}) => {
  const periodName = periods.find(({ key }) => key === period).title.toLowerCase();
  const dimensions = `${colNum} x ${rowNum}`;

  return (
    <span>
      <>
        <strong>{username}</strong>
        {': '}
        <strong>{dimensions}</strong>
        {', '}
        <strong>{periodName}</strong>
        {showName === 'true' && <>, with names</>}
      </>
    </span>
  );
};

export default CollageDescription;
