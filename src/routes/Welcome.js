import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  PageTitle,
  PageContent,
  MainText,
  Red,
  Link,
  Button,
  RegenerateLastCollage,
  MaintenanceModeBubble,
  ButtonContainer,
} from '../components';
import { validateParams } from '../util';

const Welcome = ({ isMaintenanceMode }) => {

  const [lastCollageInfo, setLastCollageInfo] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem('username');
    let period = localStorage.getItem('period');
    const start = localStorage.getItem('periodStart');
    const end = localStorage.getItem('periodEnd');
    if (start) {
      period = { start, end };
    }
    const rowNum = localStorage.getItem('rowNum');
    const colNum = localStorage.getItem('colNum');
    const type = localStorage.getItem('type');
    const showName = localStorage.getItem('showName');
    const hideMissing = localStorage.getItem('hideMissing');

    const params = {
      username,
      period,
      rowNum,
      colNum,
      type,
      showName,
      hideMissing,
    };

    if (!validateParams(params)) return;

    setLastCollageInfo(params);
  }, []);

  const history = useHistory();

  const getStarted = () => {
    history.push('/username', {});
  };

  return (
    <div>
      <PageTitle>
        Welcome to <Red>Lastcollage</Red>
      </PageTitle>
      <PageContent>
        <MainText>
          Generate a collage from your <Link href="https://www.last.fm/">Last.fm</Link> scrobbles
        </MainText>
        {isMaintenanceMode && (
          <MaintenanceModeBubble />
        )}
        <ButtonContainer>
          <Button onClick={getStarted}>Get started</Button>
        </ButtonContainer>
        {lastCollageInfo && <RegenerateLastCollage info={lastCollageInfo} />}
      </PageContent>
    </div>
  );
};

export default Welcome;
