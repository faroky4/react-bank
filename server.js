const path = require('path');
const api = require('./src/server/routes/api');
const express = require('express');
const app = express();
let port = 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'components')));
app.use(express.static(path.join(__dirname, 'model')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/',api);

app.listen(process.env.PORT || port);