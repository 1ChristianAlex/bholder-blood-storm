import { Schema, model, SchemaType } from 'mongoose';

const abiliityModel = new Schema({
  abiliityName: {
    type: String
  },
  abiliityValue: {
    type: Schema.Types.Mixed
  }
});

const attributeModel = new Schema({
  atributeName: {
    type: String
  },
  atributeValue: {
    type: Schema.Types.Mixed
  }
});
const lifeStatus = new Schema({
  current: {
    type: String
  },
  max: {
    type: String
  }
});
const player = new Schema({
  _id: {
    type: String
  },
  playerName: {
    required: true,
    type: String,
    minlength: 4
  },
  class: {
    type: String
  },
  breed: {
    type: String
  },
  level: {
    type: String
  },
  life: {
    type: lifeStatus
  },

  attribute: {
    type: [attributeModel]
  },
  abiliity: {
    type: [abiliityModel]
  },
  alignment: {
    type: String
  },
  background: {
    type: String
  },
  experience_points: {
    type: Number
  },
  inspiration: {
    type: Number
  },
  proficiency_bonus: {
    type: Number
  },
  travel_speed: {
    type: Number
  },
  initiative: {
    type: Number
  },
  playerImage: {
    type: String
  },
  inventorie_ref: {
    type: String
  },
  accessLevel: {
    type: String,
    default: 'Player'
  }
});

export default model('player', player);
