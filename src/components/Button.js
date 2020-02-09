import React from 'react';
import { red, dimRed, lightRed, darkRed } from '../styles';
import styled from 'styled-components';

export default styled(({ outlined, ...otherProps }) => <button {...otherProps} />)`
  text-transform: none;
  font-size: 24pt;
  width: 280px;
  margin-bottom: 20px;
  padding: 16px 0;
  cursor: pointer;

  ${props =>
    props.outlined
      ? `
  background-color: transparent;
  color: ${red};
  border: 2px solid ${red};
  border-radius: 4px;

  :hover {
    background-color: ${lightRed};
    color: white;
    border: 2px solid ${lightRed};
  }

  :focus {
    background-color: ${red};
    color: white;
  }

  :active {
    background-color: ${red};
    color: white;
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
`;
