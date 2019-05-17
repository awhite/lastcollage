import React, { Component } from 'react';
import MaterialButton from '@material-ui/core/Button';
import styled from 'styled-components';

export class Button extends Component {
  static defaultProps = {
    variant: 'contained',
    color: 'primary'
  };

  render() {
    return <MaterialButton {...this.props} />;
  }
}

export const CtaButton = styled(Button)`
  text-transform: none;
  font-size: 20pt;
  width: 280px;
  margin-bottom: 20px;
`;
