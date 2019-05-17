import React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';

export default styled(({ center, ...otherProps }) => (
  <Input classes={{ input: 'input' }} autoFocus {...otherProps} />
))`
  margin-bottom: 48px;

  & .input {
    font-size: 22pt;
    min-width: 280px;
    max-width: 400px;
    ${props => (props.center ? 'text-align: center;' : '')};
  }
`;
