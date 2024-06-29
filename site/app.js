const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const routes = require('./route/route.js');


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use('/', routes);

app.use("/assets", express.static(path.join(__dirname, './assets')));

app.listen(port, () => console.log(`Server listening on port ${port}`));


