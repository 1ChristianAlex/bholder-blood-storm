import { Schema, model } from 'mongoose';

const userModel = new Schema({
  name: String,
  lastName: String,
  userName: String,
  pass: String,
  email: String,
  tel: String,
  birthday: String,
  createDate: String
});

export default model('user', userModel);
