const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Error handlers
const errorHandlers = require("./handlers/errorHandler");
app.use(errorHandlers.notFound);

// log all requests to access.log
app.use(morgan('dev'));


// Routes 
const routes = require('./routes/main.route');
app.use('/api', routes);

module.exports = app;