import { createTheme } from '@material-ui/core';

export default createTheme({
  palette: {
    primary: {
      main: '#119da4',
      contrastText: '#FFF',
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
  MuiOutlinedInput: {
    marginDense: {
      borderRadius: 50,
      overflow: 'hidden',
    },
    root: {
      '&  input[type=number]': {
        '&::-webkit-inner-spin-button': {
          display: 'none !important',
        },
      },
    },
  },
  MuiInput: {
    marginDense: {
      borderRadius: 50,
      overflow: 'hidden',
    },
    root: {
      '&  input[type=number]': {
        '&::-webkit-inner-spin-button': {
          display: 'none !important',
        },
      },
    },
  },
});
