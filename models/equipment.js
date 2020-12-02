'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Equipment.belongsTo(models.User)
    }
  };
  Equipment.init({
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    serial: DataTypes.STRING,
    calibration: DataTypes.DATE,
    due: DataTypes.DATE,
    owner: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Equipment',
  });
  return Equipment;
};