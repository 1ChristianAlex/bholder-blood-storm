import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';

export class Items extends Model {}
Items.init(
  {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    attributes: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.STRING
    },
    categorie: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'items'
  }
);
