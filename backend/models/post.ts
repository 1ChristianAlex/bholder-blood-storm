import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './user';

export class Post extends Model {}
Post.init(
  {
    categorie: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    subtitle: {
      type: DataTypes.STRING
    },
    thumb: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    }
  },
  { sequelize, modelName: 'posts' }
);
Post.belongsTo(User);
