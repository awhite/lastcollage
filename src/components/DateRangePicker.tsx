import styled from 'styled-components'

import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from '@material-ui/pickers'
import { DATE_FORMAT } from '../util/constants'
import { Moment } from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  > :not(:last-child) {
    margin-right: 16px;
  }
`

interface DatePickerProps {
  date: any
  setDate: any
  label: string
}

const DatePicker = ({ date, setDate, label }: DatePickerProps) => (
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

interface Props {
  startDate: Moment
  setStartDate: (moment: Moment) => void
  endDate: Moment
  setEndDate: (moment: Moment) => void
}

const DateRangePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Props) => {
  return (
    <Container>
      <DatePicker date={startDate} setDate={setStartDate} label="Start date" />
      <DatePicker date={endDate} setDate={setEndDate} label="End date" />
    </Container>
  )
}

export default DateRangePicker
