'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Equipment)
      User.belongsToMany(models.Admin)
    }
  };
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    bio: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      unique: true
    },
    profileImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};