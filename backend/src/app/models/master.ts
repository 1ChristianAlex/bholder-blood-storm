import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';
import { InventorieRoom } from './';

export default class Master extends Model {}

Master.init(
  {
    p_access: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: '3'
    }
  },
  { sequelize, modelName: 'master' }
);
Master.belongsTo(InventorieRoom);
