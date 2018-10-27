
const path = require('path');
const express = require('express');
const routes = require('./routes');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const PORT = 3000;
const HOSTNAME = 'localhost';

const app = express();

dotEnv.config();
mongoose.connect(process.env.MONGO_URI, (err)=>{
   console.log(err);
});

app.use(express.static('public'));

app.use(express.json());

app.use('/api',routes);


app.listen(PORT,()=>{
    console.log(`Server started @${HOSTNAME}:${PORT}`)
});



