import PostQuestion from '../models/postQuestion.js';

export const getQuestions = async (req, res) => {
    try {
        const postQuestions = await PostQuestion.find();

        res.status(200).json(postQuestions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuestion = async (req, res) => {
    const question = req.body;

    const newQuestion = new PostQuestion(question);

    try {
        await newQuestion.save();

        res.status(201).json('New Question!');
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}