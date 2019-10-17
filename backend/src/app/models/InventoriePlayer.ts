import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { Items } from './';

export default class InventoriePlayer extends Model {}
InventoriePlayer.init(
  {
    current_weight: {
      type: DataTypes.STRING
    },
    max_weight: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'inventorie_player'
  }
);
InventoriePlayer.belongsTo(Items);
