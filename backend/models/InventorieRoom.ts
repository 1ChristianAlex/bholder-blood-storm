import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Items } from './Items';

export class InventorieRoom extends Model {}
InventorieRoom.init(
  {
    quantity: {
      type: DataTypes.INTEGER
    }

    // item_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'items',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    modelName: 'inventorie_Room'
  }
);
InventorieRoom.belongsTo(Items);
