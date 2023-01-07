
module.exports = (sequelize, DataTypes) => {
    const Kartu =  sequelize.define( "Kartu", {
        id_ujian : {
            primaryKey : true,
            type : DataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false
          },
          id_peserta : {
            type : DataTypes.INTEGER,
            allowNull : false
          },
          id_kloter : {
            type : DataTypes.INTEGER,
            allowNull : false
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
        tableName : "tb_kartu_ujian"
    });

    return Kartu;
}