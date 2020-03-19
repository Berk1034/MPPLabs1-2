import express from 'express'
import bodyParser from 'body-parser'
import {taskRouter} from "./routes/task-router"
import {connectToDatabase} from './database/connection'
import {BASE_URL} from "./routes/routes"

const fileUpload = require('express-fileupload');
var path = require('path');
const app = express();

connectToDatabase();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/views')));
app.use(fileUpload());
app.use(BASE_URL, taskRouter);
app.listen(8080, function () {
    console.log('Listening on port 8080');
});
