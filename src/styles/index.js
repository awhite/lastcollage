import { createMuiTheme } from '@material-ui/core/styles';

export * from './colors';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#f24c3a',
      main: '#B80610',
      dark: '#800000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffb3',
      main: '#ffe082',
      dark: '#caae53',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiInput: {
      input: {
        fontSize: '22pt',
        minWidth: 280,
        maxWidth: 400,
        color: 'white',
        paddingBottom: 8,
      }
    }
  }
});
