import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
  name: String,
  lastName: String,
  pass: String,
  email: String,
  tel: String,
  birthday: String,
  createDate: { type: Date, date: Date() }
});

export default mongoose.model('user', userModel);
