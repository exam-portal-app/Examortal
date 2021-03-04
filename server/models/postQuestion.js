import mongoose from 'mongoose';
const questionSchema = mongoose.Schema({
  quesType: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  },
  negativeMarks: {
    type: Number,
    required: true
  },
  marks: {
    type: Number,
    required: true
  },
  answers: {
    type: [Object],
    required: true
  },
}
);

const Question = mongoose.model('Question', questionSchema);
export default Question;