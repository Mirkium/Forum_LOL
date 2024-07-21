const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();
const port = 3000;
const cors = require('cors');

const routes = require('./route/route.js');

app.use(session({
    secret: 'votre_secret',
    resave: false,
    saveUninitialized: true
}));

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use('/', routes);

app.use("/assets", express.static(path.join(__dirname, './assets')));

app.listen(port, () => console.log(`Server listening on port ${port}`));
