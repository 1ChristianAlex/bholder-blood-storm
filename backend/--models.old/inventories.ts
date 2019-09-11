import { Schema, model } from 'mongoose';

const inventorieModel = new Schema({
  max_weight: {
    type: Number,
    default: 50
  },
  current_weight: {
    type: Number
  },
  items_ref: {
    type: [String]
  }
});

export default inventorieModel;
