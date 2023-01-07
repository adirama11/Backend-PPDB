'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_peserta_ujian', { 
      id_ujian : {
        primaryKey : true,
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false
      },
      id_peserta : {
        type : Sequelize.INTEGER,
        allowNull : false
      },
      id_kloter : {
        type : Sequelize.INTEGER,
        allowNull : false
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

    await queryInterface.addConstraint('tb_peserta_ujian', {
      type: 'foreign key',
      name: 'ID_PESERTA',
      fields: ['id_peserta'],
      references: {
        table: 'tb_profil_peserta',
        field: 'id_peserta'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
     })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_peserta_ujian');
  }
};
