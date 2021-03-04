import { makeStyles } from '@material-ui/core/styles'
import background from './img/Background_Graphic.png'

export default makeStyles(() => ({
  appBar: {
    borderRadius: '0px 0px 5px 5px',
    display: 'flex',
    padding: '5px 0px 5px 0px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#001e3a',
  },
}));    