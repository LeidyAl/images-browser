import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: '100%',
    background: '#ededed',
    boxShadow: theme.shadows[3],
    borderRadius: 10,
    padding: 0,
  },
  cardContent: {
    minHeight: 100,
    maxHeight: 100,
    display: 'flex',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 200,
      maxHeight: 200,
    },
  },
  info: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& h6': {
      display: 'none',
    },
    '&:hover': {
      '& h6': {
        display: 'block',
      },
      color: '#ffff',
    },
  },
}));

export default useStyles;
