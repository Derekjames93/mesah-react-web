'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.hasMany(models.User)
      Admin.hasMany(models.Equipment)
    }
  };
  Admin.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique: true
    },
    profileImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};