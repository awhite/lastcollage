import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { MuiThemeProvider } from '@material-ui/core';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { theme } from './styles';
import App from './App';

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point')
});

export default () => (
  <JssProvider jss={jss} generateClassName={createGenerateClassName()}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </JssProvider>
);