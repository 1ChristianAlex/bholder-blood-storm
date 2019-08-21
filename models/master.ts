import { Schema, model } from 'mongoose';

const masterModel = new Schema({
  guide_line: {
    type: String
  },
  maps_ref: {
    type: String
  },

  inventorie_room_ref: {
    type: String
  },

  tags: {
    type: [String]
  },
  beast_book_ref: {
    type: [String]
  },
  catalog_ref: {
    type: String
  }
});
export default model('master', masterModel);
