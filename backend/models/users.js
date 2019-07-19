const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
  name: String,
  lastName: String,
  pass: String,
  email: String,
  tel: String,
  birthday: String,
  createDate: { type: Date, date: Date.now() }
});

module.exports = mongoose.model('user', userModel);
