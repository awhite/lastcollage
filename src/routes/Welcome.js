import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { PageTitle, MainText, Red, Link, FlexCol, Button, RegenerateLastCollage } from '../components';

const Welcome = () => {

  const [lastCollageInfo, setLastCollageInfo] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const period = localStorage.getItem("period");
    const rowNum = localStorage.getItem("rowNum");
    const colNum = localStorage.getItem("colNum");
    const type = localStorage.getItem("type");
    const showName = localStorage.getItem("showName");

    if (
      !username ||
      !period ||
      !rowNum ||
      !colNum ||
      !type ||
      !showName
    ) return;

    setLastCollageInfo({
      username,
      period,
      rowNum,
      colNum,
      type,
      showName
    });
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
        <Button onClick={getStarted}>Get started</Button>
      </FlexCol>
      {lastCollageInfo && <RegenerateLastCollage info={lastCollageInfo} />}
    </div>
  );
};

export default Welcome;
