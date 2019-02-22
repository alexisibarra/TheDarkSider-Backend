
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const { SECRET_PHRASE } = process.env;

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: SECRET_PHRASE,
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));

module.exports = app;
