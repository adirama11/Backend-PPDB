'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_kloter', { 
      id_kloter : {
        primaryKey : true,
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true
      },
      ruangan : {
        type : Sequelize.STRING,
        allowNull : true
      },
      waktu : {
        type : Sequelize.STRING,
        allowNull : true
      },
      createdAt : {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      }, 
      updatedAt : {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: true
      }  
     });
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_kloter');
  }
};
