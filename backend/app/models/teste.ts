import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';

export class Teste extends Model<any> {}

Teste.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    teste: {
      allowNull: true,
      type: DataTypes.STRING
    }
  },
  { sequelize, modelName: 'teste' }
);
