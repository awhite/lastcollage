import React, { useState } from 'react'
import styled from 'styled-components'
import moment, { Moment } from 'moment'

import {
  InputScreen,
  Button,
  BackButton,
  ButtonContainer,
  DateRangePicker,
  ExpandableButton,
} from '../components'
import { PERIODS } from '../lastfm'
import { useHistory } from 'react-router-dom'
import { DateInterval, Period, RouteProps } from '../types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 20px;
  }
`

interface CustomTimespanProps {
  startDate: Moment
  endDate: Moment
  setStartDate: (moment: Moment) => void
  setEndDate: (moment: Moment) => void
  onSelectDateRange: React.MouseEventHandler<HTMLButtonElement>
}

const CustomTimespan = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onSelectDateRange,
}: CustomTimespanProps) => {
  return (
    <ExpandableButton
      renderHiddenContent={() => (
        <Container>
          <DateRangePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <Button onClick={onSelectDateRange}>Submit</Button>
        </Container>
      )}
    >
      Custom
    </ExpandableButton>
  )
}

const SelectTimespan = ({ setCollageGenerationParams }: RouteProps) => {
  const history = useHistory()

  const [startDate, setStartDate] = useState(moment())
  const [endDate, setEndDate] = useState(moment())

  const onSelectOption = (period: Period) => {
    setCollageGenerationParams((params) => ({ ...params, period }))
    history.push('/size')
  }

  const onSelectDateRange = () => {
    const start = startDate.unix()
    const end = endDate.unix()
    const period: DateInterval = [start, end]
    setCollageGenerationParams((params) => ({ ...params, period }))
    history.push('/size')
  }

  return (
    <InputScreen title="How long do you want this collage to span?">
      <ButtonContainer>
        {[...PERIODS.entries()].map(([key, title]) => (
          <Button key={key} onClick={() => onSelectOption(key)}>
            {title}
          </Button>
        ))}
        <CustomTimespan
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onSelectDateRange={onSelectDateRange}
        />
        <BackButton />
      </ButtonContainer>
    </InputScreen>
  )
}

export default SelectTimespan
