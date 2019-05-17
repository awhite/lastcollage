import React, { Component } from 'react';
import { InputScreen, KeypressOptionGroup } from '../components';
import { Generate } from '../routes';
import { types, getTypeFromKey } from '../lastfm';

export default class SelectType extends Component {
  onSelectOption = key => {
    this.props.navigate(Generate, { type: getTypeFromKey(key) });
  };

  render() {
    return (
      <InputScreen title="Albums or Artists?">
        <KeypressOptionGroup ordered options={types} onSelectOption={this.onSelectOption} />
      </InputScreen>
    );
  }
}
