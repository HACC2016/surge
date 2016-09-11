const Express = require('express');
const App = Express();
const PORT = 3000;

App.get('/', (req, res) => {
  res.send('Hello World');
});

App.listen(PORT, _ => {
  process.stdout.write(`server started on ${PORT}`);
});
