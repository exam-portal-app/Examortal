import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    ques_type: Number,
    message: String,
    image: {
        type: String,
        default: null
    },
    negative_marks: Number,
    marks: Number,
    answers: [String],
}
);

const PostQuestion = mongoose.model('PostQuestion', questionSchema);
export default PostQuestion;