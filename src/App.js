import React, { Component } from 'react';
import styled from 'styled-components';

import { Welcome, AccountPrompt } from './routes';
import { grey } from './styles/colors';

const AppContainer = styled.div`
  text-align: center;
  background-color: ${grey};
  color: white;
`;

export default class App extends Component {
  state = {
    // screen: Welcome
    screen: AccountPrompt
  };

  render() {
    return <AppContainer>{this.getComponentFromState()}</AppContainer>;
  }

  getComponentFromState = () => {
    return <this.state.screen navigate={this.navigate} />;
  };

  navigate = (screen, navigationParams) => {
    this.setState({
      screen,
      navigationParams: { ...this.state.navigationParams, ...navigationParams }
    });
  };
}
