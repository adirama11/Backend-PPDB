
module.exports = (sequelize, DataTypes) => {
    const Pengumuman =  sequelize.define( "Pengumuman", {
      id_pengumuman : {
        primaryKey : true,
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true
      },
        id_ujian : {
            type : DataTypes.INTEGER,
          },
          nilai : {
            type : DataTypes.INTEGER,
            allowNull : true
          }, 
          rangking : {
            type : DataTypes.INTEGER,
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
        tableName : "tb_pengumuman"
    });

    return Pengumuman;
}