import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';

import { InputScreen, InfoBubble } from '../components';
import { BASE_URL } from '../util/constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCallback } from 'react';

const Bubble = styled(InfoBubble)`
  margin-top: 48px;
`;

const LoadCollage = () => {
  const [isTakingLong, setTakingLong] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTakingLong(true);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  const history = useHistory();
  const { location } = history;

  const onCollageLoaded = useCallback(({ path, downloadPath, rows, cols }) => {
    history.replace('/collage', { ...location.state, imgUrl: path, downloadPath, rowNum: rows, colNum: cols });
  }, [history, location.state]);

  const onCollageLoadError = useCallback(err => {
    history.replace('/collage', { ...location.state, err });
  }, [history, location.state]);

  const saveLastCollageInfo = useCallback(() => {
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
  }, [location.state]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(`${BASE_URL}/collage`, {
          ...location.state,
        }, {
          responseType: 'json',
        });
        saveLastCollageInfo();
        onCollageLoaded(data);
      } catch (err) {
        onCollageLoadError(err);
      }
    })();
  }, [location.state, onCollageLoadError, onCollageLoaded, saveLastCollageInfo]);

  if (!(location.state)) return (
    <Redirect to="/" />
  );

  return (
    <InputScreen title="Generating your collage..." center>
      {/* <CollageLoadingBar onLoad={this.onCollageLoaded} /> */}
      <CircularProgress />
      {isTakingLong && (
        <Bubble>Still working...</Bubble>
      )}
    </InputScreen>
  );
};

export default LoadCollage;
