import React, { useEffect } from 'react';
import { InputScreen } from '../components';
import { ShowCollage } from '../routes';
import axios from 'axios';
import { BASE_URL } from '../util/constants';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadCollage = ({ navigate, navigationParams }) => {
  const onCollageLoaded = imgUrl => {
    navigate(ShowCollage, { imgUrl });
  };

  const onCollageLoadError = err => {
    navigate(ShowCollage, { err });
  }

  useEffect(() => {
    const call = async () => {
      try {
        const { data: imgUrl } = await axios.get(`${BASE_URL}/collage`, {
          params: {
            ...navigationParams
          },
          responseType: 'text'
        });
        onCollageLoaded(imgUrl);
      } catch (err) {
        onCollageLoadError(err);
      }
    };

    call();
  });

  return (
    <InputScreen title="Generating your collage..." center>
      {/* <CollageLoadingBar onLoad={this.onCollageLoaded} /> */}
      <CircularProgress />
    </InputScreen>
  );
};

export default LoadCollage;
