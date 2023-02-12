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
    display: 'flex',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '100%',
    },
  },
  info: {
    width: '100%',
    position: 'absolute',
    background: 'rgba(0,0,0,0.3)',
    color: '#ffff',
    padding: 8,
    bottom: 0,
  },
}));

export default useStyles;
