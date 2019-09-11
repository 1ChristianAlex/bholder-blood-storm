import { Schema, model } from 'mongoose';
import DateNow from '../helpers/Date';
const catalog = new Schema({
  item_ref: {
    type: String,
    required: true
  },
  game: {
    type: String
  }
});
export default model('catalog_item', catalog);
