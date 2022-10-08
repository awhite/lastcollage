import moment from 'moment'

import { DATE_FORMAT, FILE_DATE_FORMAT } from './constants'

export * from './breakpoints'
export * from './constants'
export * from './optionKeys'

export const formatUnix = (unix) => moment.unix(unix).format(DATE_FORMAT)
export const formatUnixForFile = (unix) => moment.unix(unix).format(FILE_DATE_FORMAT)

export function validateParams({ username, period, rowNum, colNum, type, showName, hideMissing }) {
  return !(
    !username ||
    !period ||
    !rowNum ||
    !colNum ||
    !type ||
    !showName ||
    !hideMissing ||
    parseInt(rowNum) > 20 ||
    parseInt(colNum) > 20
  )
}

export const dateFormat = 'MMM D, YYYY'
