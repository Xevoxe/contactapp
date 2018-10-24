
const path = require('path');
const express = require('express');
const routes = require('./routes');
const PORT = 3000;
const HOSTNAME = 'localhost';

const app = express();

app.use(express.static('public'));
app.use('/api',routes);
console.log(__dirname);

app.listen(PORT,()=>{
    console.log(`Server started @${HOSTNAME}:${PORT}`)
});



