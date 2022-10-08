import React from 'react'
import styled from 'styled-components'

import { periods, types } from '../lastfm'
import InfoBubble from './InfoBubble'
import { formatUnix } from '../util'

const Container = styled(InfoBubble)`
  margin-bottom: 48px;
  font-size: 2rem;
`

const ResultDescription = ({ navigationParams: { username, period, rowNum, colNum, type } }) => {
  const typeName = types.find(({ key }) => key === type).title.toLowerCase()
  const dimensions = `${colNum} x ${rowNum}`
  const forever = period === 'forever'
  const interval = typeof period === 'object'
  const renderPeriodText = () => {
    if (interval) {
      return (
        <>
          {' '}
          from <strong>{formatUnix(period.start)}</strong> to <strong>{formatUnix(period.end)}</strong>
        </>
      )
    } else if (!forever) {
      return (
        <>
          {' '}
          in the past <strong>{periods.find(({ key }) => key === period).title.toLowerCase()}</strong>
        </>
      )
    }
  }

  return (
    <Container>
      <span>
        <strong>{dimensions}</strong> collage of top <strong>{typeName}</strong> for <strong>{username}</strong>
        {renderPeriodText()}
      </span>
    </Container>
  )
}

export default ResultDescription
