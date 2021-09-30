import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import { grey } from './styles/colors';
import { theme } from './styles';
import { Footer, PageContainer, WhatsNewModal } from './components';
import {
  Welcome,
  EnterUsername,
  SelectTimespan,
  SelectSize,
  SelectType,
  SelectNameOverlay,
  SelectHideMissing,
  Generate,
  LoadCollage,
  ShowCollage,
} from 'routes';

import pkg from '../package.json';

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  background-color: ${grey};
  color: white;
  padding-bottom: 300px;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: auto;
`;

const App = () => {
  const [isModalVisible, setModalVisible] = useState(
    (() => {
      const version = localStorage.getItem('version');
      localStorage.setItem('version', pkg.version);
      if (!version) {
        localStorage.setItem('showChangelogForNewVersions', true);
        return true;
      }
      return !!(
        pkg.version > version &&
        localStorage.getItem('showChangelogForNewVersions')
      );
    })()
  );
  const [showOnNewVersion, setShowOnNewVersion] = useState(
    !!localStorage.getItem('showChangelogForNewVersions')
  );

  const toggleShowOnNewVersion = () => {
    const shouldShow = !showOnNewVersion;
    setShowOnNewVersion(shouldShow);

    if (shouldShow) {
      localStorage.setItem('showChangelogForNewVersions', true);
    } else {
      localStorage.removeItem('showChangelogForNewVersions');
    }
  };

  const showWhatsNew = () => setModalVisible(true);
  const hideWhatsNew = () => setModalVisible(false);

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Wrapper>
          <AppContainer>
            <PageContainer>
              <BrowserRouter>
                <Switch>
                  <Route path="/username">
                    <EnterUsername />
                  </Route>
                  <Route path="/type">
                    <SelectType />
                  </Route>
                  <Route path="/timespan">
                    <SelectTimespan />
                  </Route>
                  <Route path="/size">
                    <SelectSize />
                  </Route>
                  <Route path="/overlay">
                    <SelectNameOverlay />
                  </Route>
                  <Route path="/hideMissing">
                    <SelectHideMissing />
                  </Route>
                  <Route path="/generate">
                    <Generate />
                  </Route>
                  <Route path="/load">
                    <LoadCollage />
                  </Route>
                  <Route path="/collage">
                    <ShowCollage />
                  </Route>
                  <Route path="/">
                    <Welcome />
                  </Route>
                </Switch>
              </BrowserRouter>
            </PageContainer>
          </AppContainer>
          <Footer
            onClickWhatsNew={(e) => {
              e.preventDefault();
              showWhatsNew();
            }}
          />
          <WhatsNewModal
            isOpen={isModalVisible}
            dismiss={hideWhatsNew}
            showOnNewVersion={showOnNewVersion}
            toggleShowOnNewVersion={toggleShowOnNewVersion}
          />
        </Wrapper>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
