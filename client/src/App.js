import React, { useEffect } from 'react'
import { AppBar, Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import Questions from './components/Questions/Questions';
import QuesFile from './components/Form/QuesFile'

import { getQuestions } from './actions/questions';
import useStyles from './styles';
import theme from './Themes/Theme';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.background}>
        <AppBar className={classes.appBar} position="static">
          <Container>
            <Typography className={classes.title}>ExamAlpha</Typography>
          </Container>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item lg={3}>
                <Questions />
              </Grid>
              <Grid item lg={9}>
                <QuesFile />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </div>
    </ThemeProvider >
  )
}

export default App;