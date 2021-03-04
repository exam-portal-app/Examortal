import * as yup from "yup";

const validationsForm = {
  message: yup.string().required("Required"),
  quesType: yup.string().required("Select your question type"),
  negativeMarks: yup.number()
    .required("Give the negative marks"),
  marks: yup.number()
    .required("Give the marks for the question"),
};

export default validationsForm;
/*


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
                                fullWidth
                                variant="outlined"
                                name={`answers.${index}.value`}
                                component={TextField}
                                label="Option"
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



*/