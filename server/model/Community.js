const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Community extends Model {}

Community.init(
  {
   //columns
  },
  {
    sequelize
  }
);

module.exports = Community;