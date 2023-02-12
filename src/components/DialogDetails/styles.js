import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    '& .MuiDialog-paperWidthMd': {
      borderRadius: 20,
      padding: 0,
    },
  },
  dialogContent: {
    background: theme.palette.secondary.main,
    padding: 0,
    '&.MuiDialogContent-root:first-child': {
      paddingTop: 0,
    },
  },
  infoContainer: {
    padding: 8,
  },
  info: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF',
  },
  description: {
    color: '#ededed',
    fontSize: 12,
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 8,
  },
}));

export default useStyles;
