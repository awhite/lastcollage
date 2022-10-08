import React from 'react'
import styled from 'styled-components'

import { KeyboardDatePicker } from '@material-ui/pickers'
import { DATE_FORMAT } from '../util/constants'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  > :not(:last-child) {
    margin-right: 16px;
  }
`

const DatePicker = ({ date, setDate, label }) => (
  <KeyboardDatePicker
    autoOk
    variant="inline"
    inputVariant="outlined"
    label={label}
    format={DATE_FORMAT}
    value={date}
    InputAdornmentProps={{ position: 'start' }}
    onChange={setDate}
  />
)

const DateRangePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <Container>
      <DatePicker date={startDate} setDate={setStartDate} label="Start date" />
      <DatePicker date={endDate} setDate={setEndDate} label="End date" />
    </Container>
  )
}

export default DateRangePicker
