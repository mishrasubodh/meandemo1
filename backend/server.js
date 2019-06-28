import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './routes/routing'
import mongoose from './dbConect/dbconfig'
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', router);

app.listen(4000,(err,res)=>{
console.log('server is running on port',4000);
})