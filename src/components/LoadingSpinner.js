import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  > * {
    margin: 0 auto;
  }
`;

const LoadingSpinner = () => (
  <Container>
    <CircularProgress />
  </Container>
);

export default LoadingSpinner;
