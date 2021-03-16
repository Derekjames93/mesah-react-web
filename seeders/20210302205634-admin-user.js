'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Admins', [
      {
        firstName: 'DeeJay',
        lastName: 'James',
        email: 'test@test.com',
        password: '$2b$10$31EwZHf4LodyeKFzgTTiTesyjb9B7cvOMsh1An6TCOBhgunBMEkPe', //password:12345
        profileImage: "/uploads/2020-12-01T13:30:15.072Zdownload.png",
        jobTitle: 'Creator',
        createdAt: new Date,
        updatedAt: new Date
      }, {
        firstName: 'Jon',
        lastName: 'Jones',
        email: 'test1@test.com',
        password: '$2b$10$31EwZHf4LodyeKFzgTTiTesyjb9B7cvOMsh1An6TCOBhgunBMEkPe', //password:12345
        profileImage: "/uploads/2020-12-01T13:30:15.072Zdownload.png",
        jobTitle: 'Creator',
        createdAt: new Date,
        updatedAt: new Date
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
