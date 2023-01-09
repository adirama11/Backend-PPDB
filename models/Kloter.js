
module.exports = (sequelize, DataTypes) => {
    const Kloter =  sequelize.define( "Kloter", {
        id_kloter : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
            allowNull:false
          },
          ruangan : {
            type : DataTypes.INTEGER,
            allowNull : true
          }, 
          waktu : {
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
        tableName : "tb_kloter"
    });
    return Kloter;
}