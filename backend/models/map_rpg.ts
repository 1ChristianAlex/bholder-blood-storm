import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export class Map_RPG extends Model {}
Map_RPG.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    km: {
      allowNull: false,
      type: DataTypes.STRING
    },
    attributes: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'map_rpg'
  }
);
