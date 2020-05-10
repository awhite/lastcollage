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

  const saveLastCollageInfo = () => {
    const {
      username,
      period,
      rowNum,
      colNum,
      type,
      showName,
      hideMissing,
    } = location.state;
    localStorage.setItem('username', username);
    localStorage.setItem('period', period);
    localStorage.setItem('rowNum', rowNum);
    localStorage.setItem('colNum', colNum);
    localStorage.setItem('type', type);
    localStorage.setItem('showName', showName);
    localStorage.setItem('hideMissing', hideMissing);
  }

  useEffect(() => {
    (async () => {
      try {
        const { data: imgUrl } = await axios.post(`${BASE_URL}/collage`, {
          ...location.state,
        }, {
          responseType: 'text',
        });
        saveLastCollageInfo();
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
