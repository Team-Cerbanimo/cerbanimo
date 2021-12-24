const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Category extends Model {}

Category.init(
  {
   //columns
  },
  {
    sequelize
  }
);

module.exports = Category;