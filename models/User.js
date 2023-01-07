module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User", {
            id_user : {
                type: DataTypes.INTEGER,
                autoIncrement : true,
                allowNull : false,
                primaryKey : true
            },
            email : {
                type : DataTypes.STRING,
                allowNull: false
            },
            password : {
                type : DataTypes.STRING,
                allowNull : true
            },
            role : {
                type: DataTypes.ENUM,
                values:['admin', 'siswa'],
                defaultValue: 'siswa',
                allowNull: true
            },
            createdAt:{
                field: "created_at",
                type: DataTypes.DATE
              },
              updatedAt:{
                field: "updated_at",
                type: DataTypes.DATE,
                allowNull: true
              },
            
        },
        {
            tableName : "tb_user"
        }
    )
    return User;
}