
'use strict';

const Express = require('express');
const App = Express();

// set template engine and where to find such files
App.set('view engine', 'pug');
App.set('views', `${__dirname}/templates`);

// static directory
// if any url matches a file in this directory
//   express will respond to the request with the file instead
// else
//   the URL will pass through and try to match
//   one of the routes below
App.use(Express.static(`${__dirname}/public`));

// routes
App.get('/', (req, res) => {
  res.render('homepage/index');
});

App.get('/course', (req, res) => {
  res.render('course/index');
});

App.get('/course-page', (req, res) => {
  res.render('course/page');
});

App.get('/analytics', (req, res) => {
  res.render('analytics/index')
})

// expose server as a module
// this is useful for creating multiple servers
//
// this can be used to spawn multiple servers in production
// or used with tests so we can run tests asynchronously
module.exports = App;
