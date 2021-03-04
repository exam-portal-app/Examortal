import Question from '../models/postQuestion.js';

export const getQuestions = async (req, res) => {
  try {
    const Questions = await Question.find();

    res.status(200).json(Questions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createQuestion = async (req, res) => {
  const question = req.body;

  const newQuestion = new Question(question);

  try {
    await newQuestion.save();

    res.status(201).json('New Question!');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}