
module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        id_peserta : {
            primaryKey : true,
            type : DataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true
          },
          id_user : {
            type : DataTypes.INTEGER,
            allowNull : false
          },
          nama : {
            type : DataTypes.STRING,
            allowNull : false
          },
          nisn : {
            type : DataTypes.INTEGER,
            allowNull : false
          },
          ttl: {
            type : DataTypes.STRING,
            allowNull : false
          },
          agama : {
            type : DataTypes.STRING,
            allowNull : false
          },
          alamat : {
            type : DataTypes.STRING,
            allowNull : false
          },
          no_hp : {
            type : DataTypes.INTEGER,
            allowNull : false
          },
          ortu : {
            type : DataTypes.STRING,
            allowNull : false
          },
          sekolah_asal : {
            type : DataTypes.STRING,
            allowNull : false
          },
          pil_jurusan : {
            type : DataTypes.STRING,
            allowNull : true
          },
          skhu : {
            type : DataTypes.STRING,
            allowNull : true
          },
          kk : {
            type : DataTypes.STRING,
            allowNull : true
          },
          surat_kes : {
            type : DataTypes.STRING,
            allowNull : true
          },
          akte : {
            type : DataTypes.STRING,
            allowNull : true
          },
          raport : {
            type : DataTypes.STRING,
            allowNull : true
          },
          bukti_bayar : {
            type : DataTypes.STRING,
            allowNull : true
          },
          createdAt : {
            type: DataTypes.DATE
          },
          updatedAt : {
            type: DataTypes.DATE,
            allowNull: true
          }
    }, 
    {
        tableName : 'tb_profil_peserta'
    });

    return Profile;
}