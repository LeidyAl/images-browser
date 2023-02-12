import { createTheme } from '@material-ui/core';

export default createTheme({
  palette: {
    primary: {
      main: '#119da4',
      contrastText: '#FFF',
      100: '#FFC676',
      200: '#F1AE6C',
      300: '#E29662',
      400: '#D47D57',
      500: '#BE5948',
      600: '#B0413E',
    },
    secondary: {
      main: '#264653',
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});
