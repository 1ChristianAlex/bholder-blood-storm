import { Schema, model } from 'mongoose';
import Date from '../helpers/Date';
const atributesItem = new Schema({
  value: {
    type: String
  },
  weight: {
    type: Number
  }
});
const itemModel = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 4
  },
  description: {
    type: String,
    required: true,
    minlength: 4
  },
  level: {
    type: String,
    required: true,
    minlength: 4
  },
  atributes: {
    type: [atributesItem],
    required: true
  },
  creation_date: {
    type: String,
    default: Date()
  },
  user_ref: {
    type: String,
    required: true
  }
});

export default model('item', itemModel);
