module.exports = (sequelizeCon , DataTypes) =>{
    let User = sequelizeCon.define("user",{
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING,
            unique : true,
            allowNull : false
        },
        address: {
            type : DataTypes.STRING,
            allowNull : false
        },
        role : {
            type : DataTypes.STRING,
            allowNull : false
        },
        password : {
            type : DataTypes.STRING,
            defaultValue : "1234",
            allowNull : false
        }
    })
    return User
}