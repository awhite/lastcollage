import { PERIODS, TYPES } from '../lastfm'
import {
  CollageGenerationParams,
  CollageType,
  DateInterval,
  FixedPeriod,
  Period,
} from '../types'
import { formatUnix, isDateInterval } from '../util'

const formatDateInterval = (dateInterval: DateInterval) =>
  `${formatUnix(dateInterval[0])} – ${formatUnix(dateInterval[1])}`
const formatFixedPeriod = (fixedPeriod: FixedPeriod) =>
  (PERIODS.get(fixedPeriod) as string).toLowerCase()

const formatPeriod = (period: Period) =>
  isDateInterval(period)
    ? formatDateInterval(period as DateInterval)
    : formatFixedPeriod(period as FixedPeriod)
const formatType = (type: CollageType) =>
  (TYPES.get(type) as string).toLowerCase()

const CollageDescription = ({
  username,
  period,
  type,
  rowNum,
  colNum,
  showName,
  hideMissing,
}: CollageGenerationParams) => {
  const periodName = formatPeriod(period)
  const typeName = formatType(type)
  const dimensions = `${colNum} x ${rowNum}`

  return (
    <span>
      <>
        <strong>{username}</strong>
        {': '}
        <strong>{dimensions}</strong> <strong>{typeName}</strong>
        {', '}
        <strong>{periodName}</strong>
        {showName && <>, with names</>}
        {hideMissing && <>, hiding missing artwork</>}
      </>
    </span>
  )
}

export default CollageDescription
