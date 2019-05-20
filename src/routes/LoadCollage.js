import React, { Component } from 'react';
import { InputScreen, CollageLoadingBar } from '../components';
import { ShowCollage } from '../routes';
import axios from 'axios';

export default class LoadCollage extends Component {
  onCollageLoaded = () => {
    this.props.navigate(ShowCollage);
    // pass image above?
  };

  render() {
    console.log(this.props.navigationParams);
    return (
      <InputScreen title="Generating your collage...">
        {/* <CollageLoadingBar onLoad={this.onCollageLoaded} /> */}
      </InputScreen>
    );
  }
}
