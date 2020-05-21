import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PageTitle, MainText, Red, Link, FlexCol, Button, RegenerateLastCollage, MaintenanceModeBubble } from '../components';
import { validateParams } from '../util';

const Welcome = ({ isMaintenanceMode }) => {

  const [lastCollageInfo, setLastCollageInfo] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const period = localStorage.getItem("period");
    const rowNum = localStorage.getItem("rowNum");
    const colNum = localStorage.getItem("colNum");
    const type = localStorage.getItem("type");
    const showName = localStorage.getItem("showName");
    const hideMissing = localStorage.getItem("hideMissing");

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
    <div className="container">
      <PageTitle>
        Welcome to <Red>Lastcollage</Red>
      </PageTitle>
      <MainText>
        Generate a collage from your <Link href="https://www.last.fm/">Last.fm</Link> scrobbles
      </MainText>
      <FlexCol>
        {isMaintenanceMode && (
          <MaintenanceModeBubble />
        )}
        <Button onClick={getStarted}>Get started</Button>
      </FlexCol>
      {lastCollageInfo && <RegenerateLastCollage info={lastCollageInfo} />}
    </div>
  );
};

export default Welcome;
