
'use strict';

const Express = require('express');
const App = Express();

App.set('view engine', 'pug');
App.set('views', `${__dirname}/templates`);

// static directory
App.use(Express.static(`${__dirname}/public`));

// routes
App.get('/', (req, res) => {
  res.render('homepage/index');
});

App.get('/course', (req, res) => {
  res.render('course/index');
});

App.get('/course/page', (req, res) => {
  res.render('course/page');
});

module.exports = App;