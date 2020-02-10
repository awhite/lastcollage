import React from 'react';
import { PageTitle, MainText, Red, Link, FlexCol, Button } from '../components';
import { AccountPrompt } from '../routes';

const Welcome = ({ navigate }) => {
  const getStarted = () => {
    navigate(AccountPrompt);
  }

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
  )
}

export default Welcome;
