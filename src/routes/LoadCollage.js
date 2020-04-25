import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen } from '../components';
import { BASE_URL } from '../util/constants';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadCollage = () => {
  const onCollageLoaded = imgUrl => {
    history.replace('/collage', { ...location.state, imgUrl });
  };

  const onCollageLoadError = err => {
    history.replace('/collage', { ...location.state, err });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: imgUrl } = await axios.get(`${BASE_URL}/collage`, {
          params: {
            ...location.state,
          },
          responseType: 'text',
        });
        onCollageLoaded(imgUrl);
      } catch (err) {
        onCollageLoadError(err);
      }
    })();
  });

  const history = useHistory();
  const { location } = history;

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  return (
    <InputScreen title="Generating your collage..." center>
      {/* <CollageLoadingBar onLoad={this.onCollageLoaded} /> */}
      <CircularProgress />
    </InputScreen>
  );
};

export default LoadCollage;
