let db = require('./index')
let { DataTypes } = require('sequelize')

module.exports = (dbConnection,DataTypes) => {
    let Books = dbConnection.define("Books",{
        id : {
            type : DataTypes.INTEGER,
           autoIncrement : true,
           primaryKey : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        author : {
            type : DataTypes.STRING,
        }
  },{
      timestamps  : false
  });
  return Books
}