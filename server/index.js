const Express = require('express');
const App = Express();

App.set('view engine', 'pug');
App.set('views', `${__dirname}/templates`);

App.get('/', (req, res) => {
  res.render('index');
});

module.exports = App;