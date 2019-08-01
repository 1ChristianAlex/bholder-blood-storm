import { Schema, model } from 'mongoose';
import DateNow from '../helpers/Date';
const userModel = new Schema({
  name: {
    required: true,
    minlength: 6,
    type: String
  },
  lastName: {
    required: true,
    minlength: 6,
    type: String
  },
  userName: {
    required: true,
    minlength: 6,
    type: String
  },
  pass: {
    required: true,
    minlength: 8,
    type: String
  },
  email: {
    required: true,
    minlength: 6,
    type: String
  },
  tel: {
    required: true,
    minlength: 9,
    type: String
  },
  birthday: {
    required: true,
    minlength: 6,
    type: String
  },
  createDate: {
    default: DateNow(),
    type: String
  },
  role: {
    default: 'user',
    type: String
  }
});

export default model('user', userModel);
