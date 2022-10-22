import { createMuiTheme, createTheme } from '@material-ui/core/styles'

export * from './colors'

export const theme = createTheme({
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
  overrides: {
    MuiInput: {
      input: {
        fontSize: '1.15rem',
        minWidth: 160,
        maxWidth: 400,
        color: 'white',
        paddingBottom: 8,
        fontFamily: 'Manrope',
      },
    },
    MuiOutlinedInput: {
      adornedStart: {
        maxWidth: 180,
      },
    },
  },
})
