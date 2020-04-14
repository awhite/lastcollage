import React, { useEffect } from 'react';
import axios from 'axios';

import { InputScreen } from '../components';
import { BASE_URL } from '../util/constants';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadCollage = ({ navigation: { navigateNext, navigationParams } }) => {
  const onCollageLoaded = imgUrl => {
    navigateNext({ imgUrl });
  };

  const onCollageLoadError = err => {
    navigateNext({ err });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: imgUrl } = await axios.get(`${BASE_URL}/collage`, {
          params: {
            ...navigationParams,
          },
          responseType: 'text',
        });
        onCollageLoaded(imgUrl);
      } catch (err) {
        onCollageLoadError(err);
      }
    })();
  });

  return (
    <InputScreen title="Generating your collage..." center>
      {/* <CollageLoadingBar onLoad={this.onCollageLoaded} /> */}
      <CircularProgress />
    </InputScreen>
  );
};

export default LoadCollage;
