import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
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
    //   player_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: Player,
    //       key: 'id'
    //     }
    //   },
    //   master_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: Master,
    //       key: 'id'
    //     }
    //   },
    //   map_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: Map_RPG,
    //       key: 'id'
    //     }
    //   }
  },
  {
    sequelize,
    modelName: 'room'
  }
);

Room.belongsTo(Player);
Room.belongsTo(Master);
Room.belongsTo(Map_RPG);
