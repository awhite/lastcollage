import React from 'react';
import styled from 'styled-components';

import { red, dimRed, darkRed } from '../styles';

export default styled(({ className, outlined, disabled, isExpanded, ...otherProps }) => <button className={className} disabled={disabled} {...otherProps} />)`
  text-transform: none;
  font-size: 1.15rem;
  min-width: 180px;
  padding: 16px;
  cursor: pointer;

  ${props =>
    props.outlined
      ? `
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 4px;

  :hover {
    background-color: ${dimRed};
  }

  :focus {
    background-color: ${dimRed};
  }

  :active {
    background-color: ${darkRed};
  }
  `
      : `
  background-color: ${red};
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px -2px black;

  :hover {
    background-color: ${dimRed};
  }

  :focus {
    background-color: ${dimRed};
  }

  :active {
    background-color: ${darkRed};
  }
  `}

  :focus {
    outline: 0;
  }

  :disabled {
    background-color: #888;
    cursor: default;
    box-shadow: none;
  }
`;
