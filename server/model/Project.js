const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Project extends Model {}

Project.init(
  {
  //columns
  },
  {
    sequelize
  }
);

module.exports = Project;