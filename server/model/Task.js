const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Task extends Model {}

Task.init(
  {
   //columns
  },
  {
    sequelize
  }
);

module.exports = Task;