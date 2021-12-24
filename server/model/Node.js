const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Node extends Model {}

Node.init(
  {
   //columns
  },
  {
    sequelize
  }
);

module.exports = Node;