import { CollageType, FixedPeriod } from '../types'

export const PERIODS = new Map<FixedPeriod, string>([
  ['1week', '1 Week'],
  ['1month', '1 Month'],
  ['3month', '3 Months'],
  ['6month', '6 Months'],
  ['1year', '1 Year'],
  ['forever', 'Forever'],
])

export const TYPES = new Map<CollageType, string>([
  ['albums', 'Albums'],
  ['artists', 'Artists'],
  ['tracks', 'Tracks'],
])
