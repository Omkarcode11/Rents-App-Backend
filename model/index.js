const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || "development"
const dbConfig = require('./../config/db.config')[env]
let db = {};

db.connection = new Sequelize(dbConfig.DB,dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

db.books = require('./Books')(db.connection, DataTypes);
db.user = require('./User')(db.connection, DataTypes);
db.rents = require('./Rents')(db.connection, DataTypes);





db.user.belongsToMany(db.books,{
  through : "rents",
})
db.books.belongsToMany(db.user, {
  through: 'rents',
});













module.exports = db;
