require('./lib/db');
require('dotenv').config();
const express = require('express');
const app = express();
logger = require('morgan');
const userRoute = require('./routes/user-route');
const productRouter = require('./routes/products');


//middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//api routes
app.use('/v1', userRoute);
app.use('/v2', productRouter);

//server
app.listen(process.env.PORT, _ => {
    console.log(`Server running on PORT ${ process.env.PORT } `);
});
if (err => {
        console.log(`Error connecting to MongoDB: ${ err }`);
    });