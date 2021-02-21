import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import questionRoutes from './routes/questions.js';

const app = express();

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/questions', questionRoutes);

const CONNECTION_URL = 'mongodb+srv://exam_portal_app:Exam_portal@exam-portal-cluster.svnt9.mongodb.net/exam_portal_app?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server connected to PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
