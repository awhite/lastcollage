import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { InputScreen, Button, BackButton, ButtonContainer, DateRangePicker, ExpandableButton } from '../components';
import { periods, getPeriodFromKey } from '../lastfm';
import { useHistory, Redirect } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const CustomTimespan = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onSelectDateRange,
}) => {
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
    >Custom</ExpandableButton>
  );
}

const SelectTimespan = () => {
  const history = useHistory();
  const { location } = history;

  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  const onSelectOption = key => {
    history.push('/size', { ...location.state, period: getPeriodFromKey(key) });
  };

  const onSelectDateRange = () => {
    const start = startDate.unix();
    const end = endDate.unix();
    history.push('/size', { ...location.state, period: { start, end } });
  }

  return (
    <InputScreen title="How long do you want this collage to span?">
      <ButtonContainer>
        {periods.map(({ title }, index) => (
          <Button key={title} onClick={() => onSelectOption(index + 1)}>{title}</Button>
        ))}
        <CustomTimespan
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          onSelectDateRange={onSelectDateRange}
        />
        <BackButton onClick={() => history.goBack()} />
      </ButtonContainer>
    </InputScreen>
  );
};

export default SelectTimespan;
