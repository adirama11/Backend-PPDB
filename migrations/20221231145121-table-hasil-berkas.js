'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_pengumuman', { 
      id_peserta : {
        type : Sequelize.INTEGER,
      },
      nilai : {
        type : Sequelize.INTEGER,
        allowNull : true
      }, 
      rangking : {
        type : Sequelize.INTEGER,
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
    await queryInterface.dropTable('tb_pengumuman');
  }
};
