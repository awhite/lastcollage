import React, { useState } from 'react';
import styled from 'styled-components';

import navigationOrder from './routes';
import { grey } from './styles/colors';

const AppContainer = styled.div`
  text-align: center;
  background-color: ${grey};
  color: white;
`;

const App = () => {
  const [navigationParams, setNavigationParams] = useState({});
  const [navigationIndex, setNavigationIndex] = useState(0);

  const addNavigationParams = params => setNavigationParams({ ...navigationParams, ...params });

  const navigate = (delta, navigationParams = {}) => {
    const newNavIndex = navigationIndex + delta;
    if (newNavIndex >= navigationOrder.length || newNavIndex < 0) throw new Error('Navigation screen index out of bounds');
    setNavigationIndex(newNavIndex);
    addNavigationParams(navigationParams);
  }

  const navigateNext = navigationParams => navigate(1, navigationParams);

  const navigateBack = navigationParams => navigate(-1, navigationParams);

  const navigation = {
    navigate,
    navigateNext,
    navigateBack,
    navigationParams,
    clearNavigationParams: () => setNavigationParams({}),
  }

  const Screen = navigationOrder[navigationIndex];

  return (
    <AppContainer>
      <Screen navigation={navigation} />
    </AppContainer>
  );
}

export default App;
