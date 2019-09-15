import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Items } from './Items';

export class InventoriePlayer extends Model {}
InventoriePlayer.init(
  {
    current_weight: {
      type: DataTypes.STRING
    },
    max_weight: {
      type: DataTypes.STRING
    }
    // itemid: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'items',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    modelName: 'inventorie_player'
  }
);
InventoriePlayer.belongsTo(Items);
