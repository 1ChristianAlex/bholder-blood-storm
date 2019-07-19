const express = require('express');
const envolvriment = require('./local');
const Routes = require('./router');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(`mongodb://${envolvriment.HOSTNAME}:${envolvriment.MONGOPORT}/lugia`, {
  useNewUrlParser: true,
  user: envolvriment.DB_USER,
  pass: envolvriment.DB_PW
});

app.use(express.json());
app.use(Routes);

app.listen(envolvriment.BACK_END_PORT, envolvriment.HOSTNAME, () => {
  console.log(`http://${envolvriment.HOSTNAME}:${envolvriment.BACK_END_PORT}`, 'connect');
});
