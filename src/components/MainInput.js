import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';

export default styled(({ center, ...otherProps }) => (
  <Input classes={{ input: 'input' }} autoFocus {...otherProps} />
))`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;

  & .input {
    ${props => (props.center ? 'text-align: center;' : '')};
  }
`;
