import Question from './Question/Question';
import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './style';
import { useSelector } from 'react-redux';

const Questions = () => {
  const classes = useStyles();
  const questions = useSelector((state) => state.questions);
  console.log(questions);

  const array = [];
  for (var i = 1; i <= questions.length; i++) {
    array[i - 1] = i;
  }

  return (
    <Grid className={classes.question}
      container
      direction="row"
      justify="flex-start"
      alignItems="center">
      {array.map((number) => <Question key={number} name={number} />)}
    </Grid>
  )
}

export default Questions;
