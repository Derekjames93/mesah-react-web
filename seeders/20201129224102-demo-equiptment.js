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
   await queryInterface.bulkInsert('Equipment', [
    {
      name: 'Temperature Instrument',
      model:'SRH77A',
      serial:'062519030', //password:12345
      calibration:"10/05/2020",
      due:'10/05/21',
      owner:'OFFICE',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Water Meter',
      model:'',
      serial:'W06076', //password:12345
      calibration:"10/13/2020",
      due:'',
      owner:'OFFICE',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Manometer',
      model:'',
      serial:'M20337', 
      calibration:"08/17/2020",
      due:'08/17/2021',
      owner:'OFFICE',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Flow Hood',
      model:'#ABT701',
      serial:'#ABT7012021002', 
      calibration:null,
      due:null,
      owner:'STEVEN',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Tachometer',
      model:null,
      serial:'H.406061', 
      calibration:null,
      due:null,
      owner:'STEVEN',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Manometer',
      model:null,
      serial:null, 
      calibration:null,
      due:null,
      owner:'STEVEN',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Ampmeter',
      model:'T5-600',
      serial:null, 
      calibration:null,
      due:null,
      owner:'STEVEN',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Laptop',
      model:'15-cs2064st',
      serial:'5CD936C9Y8', 
      calibration:null,
      due:null,
      owner:'STEVEN',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Flow Hood',
      model:'634-513-044',
      serial:'11476', 
      calibration:null,
      due:null,
      owner:'HARRY',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Ampmeter',
      model:'T5-1000',
      serial:'84891', 
      calibration:'7/12/2019',
      due:'7/12/2020',
      owner:'HARRY',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Tachometer',
      model:'R7140',
      serial:'H.363859', 
      calibration:'10/05/2020',
      due:'10/05/2021',
      owner:'HARRY',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Manometer',
      model:'ADM-870',
      serial:'M94872', 
      calibration:'3/27/2019',
      due:'3/27/2020',
      owner:'HARRY',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Flow Hood',
      model:'ABT701',
      serial:'ABT7011052001', 
      calibration:'4/29/2019',
      due:'4/22/2020',
      owner:'MARC',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Tachometer',
      model: null,
      serial:'H.406081', 
      calibration: null,
      due: null,
      owner:'MARC',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Shortridge Manometer',
      model: 'ADM-870',
      serial:'M02368', 
      calibration: '03/20/2018',
      due: '03/20/2019',
      owner:'MARC',
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Laptop',
      model: '15-cs2064st',
      serial:'5CD9415BLX', 
      calibration: null,
      due: null,
      owner:'MARC',
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
