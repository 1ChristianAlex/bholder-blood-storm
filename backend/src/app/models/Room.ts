import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { Player, Master, Maps } from './';

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
Room.belongsTo(Maps);
