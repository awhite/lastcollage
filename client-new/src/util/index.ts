import moment from 'moment'
import { CollageGenerationParams, Period } from '../types'

import { DATE_FORMAT, FILE_DATE_FORMAT } from './constants'

export * from './breakpoints'
export * from './constants'
export * from './optionKeys'

export const formatUnix = (unix: number) => moment.unix(unix).format(DATE_FORMAT)
export const formatUnixForFile = (unix: number) => moment.unix(unix).format(FILE_DATE_FORMAT)

export const isDateInterval = (period: Period) => typeof period === 'object'

export const dateFormat = 'MMM D, YYYY'
