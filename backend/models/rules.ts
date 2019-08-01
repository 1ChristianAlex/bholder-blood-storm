import { Schema, model } from 'mongoose';

const rulesModel = new Schema({
  docPath: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  game_ref: {
    type: Number,
    required: true
  }
});

export default model('rules', rulesModel);
