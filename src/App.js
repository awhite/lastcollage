import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { grey } from './styles/colors';
import { theme } from './styles';
import { Copyright } from './components';
import {
  Welcome,
  EnterUsername,
  SelectTimespan,
  SelectSize,
  SelectNameOverlay,
  Generate,
  LoadCollage,
  ShowCollage,
} from 'routes';

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  background-color: ${grey};
  color: white;
  padding-bottom: 58px;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: auto;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AppContainer>
          <BrowserRouter>
            <Switch>
              <Route path="/username"><EnterUsername /></Route>
              <Route path="/timespan"><SelectTimespan /></Route>
              <Route path="/size"><SelectSize /></Route>
              <Route path="/overlay"><SelectNameOverlay /></Route>
              <Route path="/generate"><Generate /></Route>
              <Route path="/load"><LoadCollage /></Route>
              <Route path="/collage"><ShowCollage /></Route>
              <Route path="/"><Welcome /></Route>
            </Switch>
          </BrowserRouter>
        </AppContainer>
        <Copyright />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
