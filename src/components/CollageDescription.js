import React from 'react'

import { periods, types, isPeriodInterval } from '../lastfm'
import { formatUnix } from '../util'

const CollageDescription = ({ username, period, type, rowNum, colNum, showName }) => {
  const periodName = isPeriodInterval(period)
    ? `${formatUnix(period.start)} – ${formatUnix(period.end)}`
    : periods.find(({ key }) => key === period).title.toLowerCase()
  const typeName = types.find(({ key }) => key === type).title.toLowerCase()
  const dimensions = `${colNum} x ${rowNum}`

  return (
    <span>
      <>
        <strong>{username}</strong>
        {': '}
        <strong>{dimensions}</strong> <strong>{typeName}</strong>
        {', '}
        <strong>{periodName}</strong>
        {showName === 'true' && <>, with names</>}
      </>
    </span>
  )
}

export default CollageDescription
