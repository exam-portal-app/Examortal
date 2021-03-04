import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827',
      contrastText: '#fff',
    },
    secondary: {
      light: '#407092',
      main: '#034564',
      dark: '#001e3a',
      contrastText: '#fff',
    },
    type: 'dark',
  },
});

export default theme;