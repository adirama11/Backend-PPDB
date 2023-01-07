'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.createTable('tb_ruangan', { 
    //   id_ruangan : {
    //     primaryKey : true,
    //     type : Sequelize.INTEGER,
    //     allowNull : false,
    //     autoIncrement : true
    //   },
    //   jml_max : {
    //     type : Sequelize.INTEGER,
    //     allowNull : true
    //   }
    //  });
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.dropTable('tb_ruangan');
  }
};
