import React, { Component } from 'react';
import { InputScreen, KeypressOptionGroup } from '../components';
import { KEY_YES, KEY_NO } from '../util/constants';
import { EnterUsername, CreateAccount } from '../routes';

export default class AccountPrompt extends Component {
  onSelectOption = key => {
    switch (key) {
      case KEY_YES:
        this.props.navigate(EnterUsername);
        break;
      case KEY_NO:
        this.props.navigate(CreateAccount);
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  render() {
    return (
      <InputScreen title="Do you have a Last.fm account?">
        <KeypressOptionGroup
          options={[{ key: KEY_YES, title: 'Yes' }, { key: KEY_NO, title: 'No' }]}
          onSelectOption={this.onSelectOption}
        />
      </InputScreen>
    );
  }
}
