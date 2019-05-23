import React, { Component } from 'react';
import { InputScreen, MainInput, KeypressOptionGroup } from '../components';
import { KEY_ENTER } from '../util/constants';
import { SelectTimespan } from '../routes';

export default class EnterUsername extends Component {
  state = {
    username: ''
  };

  onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        this.props.navigate(SelectTimespan, { username: this.state.username });
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  onChangeInput = ({ target: { value } }) => this.setState({ username: value });

  render() {
    return (
      <InputScreen title="Enter your Last.fm username">
        <MainInput
          center
          placeholder="Username"
          value={this.state.username}
          onChange={this.onChangeInput}
        />
        <KeypressOptionGroup
          options={[{ key: KEY_ENTER, title: 'Next', disabled: this.state.username === '' }]}
          onSelectOption={this.onSelectOption}
        />
      </InputScreen>
    );
  }
}
