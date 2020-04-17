import React, { useState } from 'react';
import styled from 'styled-components';

import navigationOrder from './routes';
import { grey } from './styles/colors';
import { Copyright } from './components';

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  background-color: ${grey};
  color: white;
`;

const App = () => {
  const [navigationParams, setNavigationParams] = useState({});
  const [navigationStack, setNavigationStack] = useState([0]);

  const addNavigationParams = params => setNavigationParams({ ...navigationParams, ...params });

  const clearNavigationParams = () => setNavigationParams({});

  const navigate = (delta, navigationParams = {}) => {
    const newNavIndex = navigationStack[navigationStack.length - 1] + delta;
    if (newNavIndex >= navigationOrder.length || newNavIndex < 0) throw new Error('Navigation screen index out of bounds');
    setNavigationStack([...navigationStack, newNavIndex]);
    addNavigationParams(navigationParams);
  }

  const navigateNext = navigationParams => navigate(1, navigationParams);

  const navigateBack = () => {
    setNavigationStack(navigationStack.slice(0, navigationStack.length - 1));
  }

  const resetNavigation = () => {
    clearNavigationParams();
    setNavigationStack([navigationStack[0]]);
  }

  const navigation = {
    navigate,
    navigateNext,
    navigateBack,
    navigationParams,
    resetNavigation,
    clearNavigationParams,
  }

  const Screen = navigationOrder[navigationStack[navigationStack.length - 1]];

  return (
    <AppContainer>
      <Screen navigation={navigation} />
      <Copyright />
    </AppContainer>
  );
}

export default App;
