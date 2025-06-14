import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sendMail from './controller.js';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/contact', sendMail);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));