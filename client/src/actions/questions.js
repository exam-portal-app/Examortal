import * as api from '../api';

//Action Creators
export const getQuestions = () => async (dispatch) => {

  try {
    const { data } = await api.fetchQuestions();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const postQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(question);

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
}