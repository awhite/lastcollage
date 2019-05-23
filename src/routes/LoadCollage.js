import React, { Component } from 'react';
import { InputScreen, CollageLoadingBar } from '../components';
import { ShowCollage } from '../routes';
import axios from 'axios';
import { BASE_URL } from '../util/constants';

export default class LoadCollage extends Component {
  onCollageLoaded = imgUrl => {
    this.props.navigate(ShowCollage, { imgUrl });
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}/collage`, {
        params: {
          ...this.props.navigationParams
        },
        responseType: 'text'
      })
      .then(({ data: imgUrl }) => {
        this.onCollageLoaded(imgUrl);
      });
  }

  render() {
    return (
      <InputScreen title="Generating your collage...">
        {/* <CollageLoadingBar onLoad={this.onCollageLoaded} /> */}
      </InputScreen>
    );
  }
}
