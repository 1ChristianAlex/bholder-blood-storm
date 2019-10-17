import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { InventoriePlayer } from './';

export default class Player extends Model {}

Player.init(
  {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.FLOAT
    },
    breed: {
      type: DataTypes.STRING
    },
    class: {
      type: DataTypes.STRING
    },
    life: {
      type: DataTypes.FLOAT
    },
    current_life: {
      type: DataTypes.FLOAT
    },
    attributes: {
      type: DataTypes.STRING
    },
    expertise: {
      type: DataTypes.STRING
    },
    alignment: {
      type: DataTypes.STRING
    },
    background: {
      type: DataTypes.TEXT
    },
    icon_image: {
      type: DataTypes.STRING
    },
    p_access: {
      type: DataTypes.STRING,
      defaultValue: '1'
    }
  },
  {
    sequelize,
    modelName: 'players'
  }
);

Player.belongsTo(InventoriePlayer);
