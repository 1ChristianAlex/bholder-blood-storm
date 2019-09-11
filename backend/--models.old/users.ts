import { Schema, model } from 'mongoose';
import DateNow from '../helpers/Date';
const userModel = new Schema({
  name: {
    required: true,
    minlength: 4,
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
  createDate: {
    default: DateNow(),
    type: String
  },
  guild: {
    type: String,
    default: 'No Guild'
  },
  rank: {
    type: String,
    default: 'No Rank'
  },
  playerRef: {
    type: [String]
  },
  masterRef: {
    type: [String]
  }
});

export default model('user', userModel);
