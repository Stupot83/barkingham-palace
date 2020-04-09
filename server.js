const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const hbs = require('hbs');
const port = process.env.PORT || 9000;
const app = express();
const routes = require('./routes');

app.use(express.static(path.join(__dirname + '../public')));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(routes);

app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port);
});