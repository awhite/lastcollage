import styled from 'styled-components'

import { PERIODS, TYPES } from '../lastfm'
import InfoBubble from './InfoBubble'
import { formatUnix } from '../util'
import { CollageGenerationParams } from '../types'

const Container = styled(InfoBubble)`
  margin-bottom: 48px;
  font-size: 2rem;
`

const ResultDescription = ({ username, period, rowNum, colNum, type }: CollageGenerationParams) => {
  const typeName = (TYPES.get(type) as string).toLowerCase()
  const dimensions = `${colNum} x ${rowNum}`
  const forever = period === 'forever'
  const interval = typeof period === 'object'
  const renderPeriodText = () => {
    if (interval) {
      return (
        <>
          {' '}
          from <strong>{formatUnix(period[0])}</strong> to <strong>{formatUnix(period[0])}</strong>
        </>
      )
    } else if (!forever) {
      return (
        <>
          {' '}
          in the past <strong>{(PERIODS.get(period) as string).toLowerCase()}</strong>
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
