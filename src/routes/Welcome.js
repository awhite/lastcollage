import React from 'react';
import { useHistory } from 'react-router-dom';

import { PageTitle, MainText, Red, Link, FlexCol, Button } from '../components';
const Welcome = () => {

const Welcome = ({ navigation: { navigateNext, clearNavigationParams } }) => {
  const history = useHistory();
  const getStarted = () => {
    history.push('/username', {});
    navigateNext();
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
        {/* <Button>Sign in</Button> */}
      </FlexCol>
    </div>
  );
};

export default Welcome;
