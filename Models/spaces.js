'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spaces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  spaces.init({
    numberSpace: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    occupied: DataTypes.BOOLEAN,
    timeOccupied: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'spaces',
  });
  return spaces;
};