import React, { Component } from 'react';
import { PageTitle, MainText, Red, Link, FlexCol, CtaButton } from '../components';
import { AccountPrompt } from '../routes';

export default class Welcome extends Component {
  getStarted = () => {
    this.props.navigate(AccountPrompt);
  };

  render() {
    return (
      <div className="container">
        <PageTitle>
          Welcome to <Red>Lastcollage</Red>
        </PageTitle>
        <MainText>
          Generate a collage from your <Link href="https://www.last.fm/">Last.fm</Link> scrobbles
        </MainText>
        <FlexCol>
          <CtaButton onClick={this.getStarted}>Get started</CtaButton>
          <CtaButton>Sign in</CtaButton>
        </FlexCol>
      </div>
    );
  }
}
