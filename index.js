require('./lib/db');
require('dotenv').config();
const express = require('express');
logger = require('morgan');
const app = express();


//middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });