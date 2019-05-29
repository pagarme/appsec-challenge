var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');

var paymentsRouter = require('./routes/payments');
var systemRouter = require('./routes/system');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/payments', paymentsRouter);
app.use('/system', systemRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.send('An error occurred');
});

module.exports = app;
