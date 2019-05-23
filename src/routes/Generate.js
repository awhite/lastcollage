import React, { Component } from 'react';
import { InputScreen, KeypressOptionGroup } from '../components';
import { KEY_ENTER } from '../util/constants';
import { LoadCollage } from '../routes';

export default class Generate extends Component {
  onSelectOption = key => {
    switch (key) {
      case KEY_ENTER:
        // this.props.navigate(LoadCollage, {
        //   username: 'aaapwww',
        //   period: '1week',
        //   rowNum: '13',
        //   colNum: '5',
        //   type: 'albums',
        //   showName: false,
        //   hideMissing: true
        // });
        this.props.navigate(LoadCollage);
        break;
      default:
        throw new Error(`Unsupported option ${key}`);
    }
  };

  render() {
    return (
      <InputScreen title="Click the button to generate your collage">
        <KeypressOptionGroup
          options={[{ key: KEY_ENTER, title: 'Generate' }]}
          onSelectOption={this.onSelectOption}
        />
      </InputScreen>
    );
  }
}
