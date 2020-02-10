import React, { Component } from 'react';
import styled from 'styled-components';

import { Welcome, Generate } from './routes';
import Test from './routes/Test';
import { grey } from './styles/colors';

const AppContainer = styled.div`
  text-align: center;
  background-color: ${grey};
  color: white;
`;

export default class App extends Component {
  state = {
    // screen: Welcome,
    screen: Generate,
    // screen: Test,
    navigationParams: {}
  };

  render() {
    return <AppContainer>{this.getComponentFromState()}</AppContainer>;
  }

  getComponentFromState = () => {
    return (
      <this.state.screen navigate={this.navigate} navigationParams={this.state.navigationParams} />
    );
  };

  navigate = (screen, navigationParams) => {
    this.setState({
      screen,
      navigationParams: { ...this.state.navigationParams, ...navigationParams }
    });
  };
}
