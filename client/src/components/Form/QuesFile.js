import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  Button,
  Grid,
  CircularProgress,
  Typography,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { Formik, Field, FieldArray, Form, } from "formik";
import { TextField, Select } from 'formik-material-ui';
import { array, string, number, object, } from "yup";
import { useDispatch } from 'react-redux';
import { postQuestion } from '../../actions/questions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'Flex',
  },
  errorColor: {
    color: theme.palette.error.main,
  },
  noWrap: {
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap',
    },
  },
  background: {
    marginTop: '3rem',
    marginLeft: '4.5rem',
    backgroundColor: '#4d1212',
    marginBottom: '3rem',
  },
  right: {
    float: 'right',
  },
  stretch: {
    flexGrow: 1,
  },
  padoverall: {
    margin: '10px',
  },
  backgroundMenu: {
    background: '#4d1212'
  },
}));
const questionTypes = [
  {
    value: 0,
    label: 'Multiple Choice'
  },
  {
    value: 1,
    label: 'Multiple Select'
  },
  {
    value: 2,
    label: 'Integer Type'
  }
]

const ans = Array(4).fill(0).map((_, idx) => ({ value: idx + 1, label: '' }));
const QuesFile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.background}>
      <CardContent>
        <Formik
          initialValues={{
            quesType: 0,
            message: '',
            image: '',
            negativeMarks: 0,
            marks: 0,
            answers: ans
          }}

          validationSchema={
            object({
              quesType: number()
                .required('Question Type is required'),
              message: string()
                .required('Question body is required'),
              negativeMarks: number()
                .typeError('Must be a positive number')
                .required('Negative Marks is required'),
              marks: number()
                .typeError('Must be a positive number')
                .positive('Must be a positive number')
                .required('Marks is required'),
              answers: array().when('quesType', {
                is: 2,
                then: null,
                otherwise: array(
                  object({
                    value: number()
                      .required('Option no. is required'),
                    label: string()
                      .required('Corresponding answer is required'),
                  })
                )
              })
            })
          }
          onSubmit={async (values) => {

            if (values.quesType === 2)
              values.answers = []
            console.log('Question :', values);

            dispatch(postQuestion(values));
            return new Promise((res) => setTimeout(res, 1500));
          }}


        >
          {({ values, errors, isSubmitting, }) => (
            <Form autoComplete="off">
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Field
                    fullWidth={true}
                    component={TextField}
                    variant="outlined"
                    name="message"
                    label="Question Body"
                    multiline
                  />
                </Grid>
                <Grid item
                  container
                  direction="row"
                  justify="space-between"
                >
                  <Grid item >
                    <Field
                      fullWidth={true}
                      component={TextField}
                      name="marks"
                      label="Marks"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item >
                    <FormControl>
                      <InputLabel variant="outlined" margin="dense">Question Type</InputLabel>
                      <Field
                        fullWidth={true}
                        component={Select}
                        name="quesType"
                        variant="outlined"
                        label="Question Type"
                      >
                        {
                          questionTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))
                        }
                      </Field>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Field
                      fullWidth={true}
                      component={TextField}
                      name="negativeMarks"
                      label="Negative Marks"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                {(values.quesType !== 2 ?
                  <FieldArray name="answers">
                    {({ push, remove }) => (
                      <React.Fragment>
                        <Grid item>
                          <Typography variant="h6">
                            Answers to this question :
                        </Typography>
                        </Grid>

                        {values.answers.map((_, index) => (
                          <Grid
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                            container
                            item
                            key={index}
                          >
                            <Grid item container spacing={2} xs={12} sm="auto">
                              <Grid item className={classes.stretch}>
                                <Field
                                  disabled
                                  fullWidth
                                  variant="outlined"
                                  name={`answers.${index}.value`}
                                  component={TextField}
                                  label={`Option ${index + 1}`}
                                />
                              </Grid>
                              <Grid item className={classes.stretch}>
                                <Field
                                  fullWidth
                                  variant="outlined"
                                  name={`answers.${index}.label`}
                                  component={TextField}
                                  label="Answer"
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                        <Grid item>
                          {typeof errors.answers === 'string' ? (
                            <Typography color="error">
                              {errors.answers}
                            </Typography>
                          ) : null}
                        </Grid>
                      </React.Fragment>
                    )}

                  </FieldArray>
                  :
                  null
                )}
                <Grid item>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size="0.9rem" />
                      ) : undefined
                    }
                  >
                    {isSubmitting ? 'Submitting' : <div className={classes.padoverall}><b>Submit</b></div>}
                  </Button>
                </Grid>

              </Grid>
              {
                //<pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
              }
            </Form>
          )}
        </Formik>
      </CardContent >
    </Card >
  )
};

export default QuesFile;