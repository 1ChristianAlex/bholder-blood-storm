import { Schema, model } from 'mongoose';

const gameModel = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  categorie: {
    type: String
  }
});

export default model('GameRpg', gameModel);
