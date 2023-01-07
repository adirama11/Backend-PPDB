'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('tb_profil_peserta', {
    id_peserta : {
      primaryKey : true,
      type : Sequelize.INTEGER,
      allowNull : false,
      autoIncrement : true
    },
    id_user : {
      type : Sequelize.INTEGER,
      allowNull : false
    },
    nama : {
      type : Sequelize.STRING,
      allowNull : false
    },
    nisn : {
      type : Sequelize.INTEGER,
      allowNull : false
    },
    ttl: {
      type : Sequelize.STRING,
      allowNull : false
    },
    agama : {
      type : Sequelize.STRING,
      allowNull : false
    },
    alamat : {
      type : Sequelize.STRING,
      allowNull : false
    },
    no_hp : {
      type : Sequelize.INTEGER,
      allowNull : false
    },
    ortu : {
      type : Sequelize.STRING,
      allowNull : false
    },
    sekolah_asal : {
      type : Sequelize.STRING,
      allowNull : false
    },
    pil_jurusan : {
      type : Sequelize.STRING,
      allowNull : true
    },
    skhu : {
      type : Sequelize.STRING,
      allowNull : true
    },
    kk : {
      type : Sequelize.STRING,
      allowNull : true
    },
    surat_kes : {
      type : Sequelize.STRING,
      allowNull : true
    },
    akte : {
      type : Sequelize.STRING,
      allowNull : true
    },
    raport : {
      type : Sequelize.STRING,
      allowNull : true
    },
    bukti_bayar : {
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

   await queryInterface.addConstraint('tb_profil_peserta', {
    type: 'foreign key',
    name: 'ID_USER',
    fields: ['id_user'],
    references: {
      table: 'tb_user',
      field: 'id_user'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_profil_peserta');
  }
};
