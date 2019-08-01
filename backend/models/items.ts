import { Schema, model } from 'mongoose';
const atributesItem = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
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
  game_ref: {
    type: Number,
    required: true
  },
  user_ref: {
    type: Number,
    required: true
  }
});

export default model('item', itemModel);
