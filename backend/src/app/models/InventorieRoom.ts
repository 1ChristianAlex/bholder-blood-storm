import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { Items } from './';

export default class InventorieRoom extends Model {}
InventorieRoom.init(
  {
    quantity: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: 'inventorie_Room'
  }
);
InventorieRoom.belongsTo(Items);
