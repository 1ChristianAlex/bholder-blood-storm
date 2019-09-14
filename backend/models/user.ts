import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Map_RPG } from './map_rpg';
import { Player } from './player';
import { Master } from './master';
import { Items } from './Items';

export class User extends Model {}
User.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    guild: {
      allowNull: true,
      type: DataTypes.STRING
    },
    elo: {
      allowNull: true,
      type: DataTypes.STRING
    },
    enable: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'true'
    }
  },
  { sequelize, modelName: 'users' }
);
User.belongsTo(Player);
User.belongsTo(Master);
User.belongsTo(Map_RPG);
User.belongsTo(Items);
