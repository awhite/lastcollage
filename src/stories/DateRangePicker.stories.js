import React from 'react';
import styled from 'styled-components';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Moment from '@date-io/moment';
import { DateRangePicker } from '../components';
import moment from 'moment';

const Container = styled.div`
  border: solid 1px black;
  padding: 10px;
`;

export default {
  title: 'DateRangePicker',
  component: DateRangePicker,
};

export const Default = () => (
  <Container>
    <MuiPickersUtilsProvider utils={Moment}>
      <DateRangePicker startDate={moment()} endDate={moment()} />
    </MuiPickersUtilsProvider>
  </Container>
);
