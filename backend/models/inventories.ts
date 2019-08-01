import { Schema, model } from 'mongoose';

const inventorieModel = new Schema({
  max_size: {
    type: Number
  },
  size_current: {
    type: Number
  },
  items_ref: {
    type: [Number]
  },
  game_ref: {
    type: String
  }
});

export default model('inventorie', inventorieModel);
