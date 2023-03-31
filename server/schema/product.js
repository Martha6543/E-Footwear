import { Sequelize } from 'sequelize';

export default {
    
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  stock: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  image: {
    type: Sequelize.TEXT,
  },
  active: {
    type: Sequelize.BOOLEAN,
  }
};