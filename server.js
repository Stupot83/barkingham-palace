const express = require('express');
const path = require('path');
const port = process.env.PORT || 9000;
const app = express();
const routes = require('./routes');
const publicPath = path.resolve(__dirname, "views");

app.use(express.static(publicPath));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(routes);

app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port);
});
