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

  useEffect(() => {
    const call = async () => {
      const { data: imgUrl } = await axios.get(`${BASE_URL}/collage`, {
        params: {
          ...navigationParams
        },
        responseType: 'text'
      });
      onCollageLoaded(imgUrl);
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
