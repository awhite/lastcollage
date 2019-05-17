import React, { Component } from 'react';
import { InputScreen, KeypressOptionGroup } from '../components';
import { SelectSize } from '../routes';
import { periods, getPeriodFromKey } from '../lastfm';

export default class SelectTimespan extends Component {
  onSelectOption = key => {
    this.props.navigate(SelectSize, { period: getPeriodFromKey(key) });
  };

  render() {
    return (
      <InputScreen title="How long do you want this collage to span?">
        <KeypressOptionGroup
          ordered
          options={periods.map(({ title }) => title)}
          onSelectOption={this.onSelectOption}
        />
      </InputScreen>
    );
  }
}
