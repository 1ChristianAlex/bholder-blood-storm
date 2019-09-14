import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { InventoriePlayer } from './InventoriePlayer';

export class Player extends Model {}

Player.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    level: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    breed: {
      allowNull: false,
      type: DataTypes.STRING
    },
    class: {
      allowNull: false,
      type: DataTypes.STRING
    },
    life: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    current_life: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    attributes: {
      allowNull: false,
      type: DataTypes.STRING
    },
    expertise: {
      allowNull: false,
      type: DataTypes.STRING
    },
    alignment: {
      allowNull: false,
      type: DataTypes.STRING
    },
    background: {
      allowNull: false,
      type: DataTypes.STRING
    },
    icon_image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    p_access: {
      allowNull: false,
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
