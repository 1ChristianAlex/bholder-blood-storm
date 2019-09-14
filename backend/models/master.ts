import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { InventorieRoom } from './InventorieRoom';
export class Master extends Model {}

Master.init(
  {
    // inventorie_room_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: InventorieRoom,
    //     key: 'id'
    //   }
    // },
    p_access: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: '3'
    }
    // inventorie_id: {
    //   allowNull: true,
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'inventorie_player',
    //     key: 'id'
    //   }
    // }
  },
  { sequelize, modelName: 'master' }
);
Master.belongsTo(InventorieRoom);
