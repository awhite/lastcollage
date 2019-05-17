import React, { Component } from 'react';
import { InputScreen, KeypressOptionGroup, SizeSelectionGrid } from '../components';
import { SelectType } from '../routes';
import { KEY_ENTER } from '../util/constants';

export default class SelectSize extends Component {
  state = {
    sizeSelected: false,
    rowNum: -1,
    colNum: -1
  };

  onSelectOption = key => {
    const { rowNum, colNum } = this.state;
    this.props.navigate(SelectType, { rowNum, colNum });
  };

  onSelectGridSize = (rowNum, colNum) => {
    this.setState({ sizeSelected: true, rowNum, colNum });
  };

  render() {
    return (
      <InputScreen title="Click a square in the grid below to specify the size of the collage you want">
        <SizeSelectionGrid
          sizeSelected={this.state.sizeSelected}
          onSelectGridSize={this.onSelectGridSize}
        />
        <KeypressOptionGroup
          options={[{ key: KEY_ENTER, title: 'Next', disabled: !this.state.sizeSelected }]}
          onSelectOption={this.onSelectOption}
        />
      </InputScreen>
    );
  }
}
