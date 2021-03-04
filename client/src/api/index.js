import axios from 'axios';

const url = 'http://localhost:5000/questions';

export const fetchQuestions = () => axios.get(url);
export const createQuestion = (newQuestion) => axios.post(url, newQuestion);