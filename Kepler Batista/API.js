const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const usuarios = require('./Rotas');

app.engine('handlebars', handlebars({defaltLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', usuarios);




module.exports = app;