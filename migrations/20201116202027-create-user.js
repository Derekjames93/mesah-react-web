'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING,
        unique: true
      },
      profileImage:{
        type: Sequelize.STRING
      },
      bio:{
        type:Sequelize.STRING
      },
      jobTitle:{
        type: Sequelize.STRING
      },
      AdminId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Admins',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};