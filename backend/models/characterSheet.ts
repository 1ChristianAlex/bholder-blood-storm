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
    type: Schema.Types.Mixed
  }
});
const characterSheetModel = new Schema({
  characterName: {
    required: true,
    type: String,
    minlength: 4
  },
  class: {
    type: String
  },
  level: {
    type: String
  },
  breed: {
    type: String
  },
  alignment: {
    type: String
  },
  experience_points: {
    type: Number
  },
  abiliity: {
    type: [abiliityModel]
  },
  attribute: {
    type: [attributeModel]
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
  life: {
    type: lifeStatus
  },
  inventorie_ref: {
    type: Number
  },
  userRef: {
    type: Number
  }
});

export default model('characterSheetModel', characterSheetModel);
