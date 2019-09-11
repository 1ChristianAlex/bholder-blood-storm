import { Schema, model } from 'mongoose';
import DateNow from '../helpers/Date';
const postModel = new Schema({
  categorie: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String
  },
  thumb: {
    type: String,
    required: true
  },
  content: {
    type: [String],
    required: true
  },
  creation_date: {
    type: String,
    default: DateNow()
  },
  userRef: {
    type: String,
    required: true
  }
});
export default model('post', postModel);
