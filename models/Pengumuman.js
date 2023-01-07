
module.exports = (sequelize, DataTypes) => {
    const Pengumuman =  sequelize.define( "Pengumuman", {
        id_peserta : {
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