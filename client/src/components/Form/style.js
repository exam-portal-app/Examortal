import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    display: 'grid',
    marginTop: '3rem',
    marginLeft: '5rem',
    backgroundColor: '#4d1212',
    padding: '1rem',
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flexstart',
  },
}));
