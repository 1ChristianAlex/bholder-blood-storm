import { Schema, model } from 'mongoose';
import DateNow from '../helpers/Date';
const configModel = new Schema({
  room_name: {
    type: String,
    required: true
  },
  room_creation_date: {
    type: String,
    required: true,
    default: DateNow()
  },
  room_privacity: {
    type: String,
    required: true
  },
  room_max_player: {
    type: String,
    required: true
  }
});
const roomModel = new Schema({
  master_ref: {
    type: String,
    required: true
  },
  player_ref: {
    type: [String],
    required: true
  },
  maps_ref: {
    type: [String],
    required: true
  },
  npc_ref: {
    type: [String],
    required: true
  },
  guild_line_ref: {
    type: [String],
    required: true
  },
  config: {
    type: configModel,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  beast_book_ref: {
    type: [String],
    required: true
  },
  discord: {
    type: String,
    required: true
  }
});
export default model('room', roomModel);
