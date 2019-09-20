import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { Player } from './player';
import { Master } from './master';
import { Map_RPG } from './map_rpg';

export class Room extends Model {}
Room.init(
  {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE
    },
    enebled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: 'room'
  }
);

Room.belongsTo(Player);
Room.belongsTo(Master);
Room.belongsTo(Map_RPG);
