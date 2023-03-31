import { Sequelize, DataTypes } from 'sequelize';

export default {
    
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  volume: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
  },
  admin:{
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
};