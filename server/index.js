const Express = require('express');
const App = Express();
const PORT = 3000;

App.set('view engine', 'hbs');
App.set('views', `${__dirname}/templates`);

App.get('/', (req, res) => {
  res.render('index');
});

App.listen(PORT, _ => {
  process.stdout.write(`server started on ${PORT}`);
});
