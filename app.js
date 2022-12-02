const express = require('express');
let app = express();
let router = require('./route/index');
let db = require('./model/index');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(router);

async function createTable() {
  await db.connection.sync();
    // insertBooks()
}

async function insertBooks() {
  await db.user.bulkCreate([
    { name: 'Omkar Sonawane', address: 'Nashik', role: ['admin'] },
    { name: 'Jayesh Bhavsar', address: 'Malegaon', role: ['user'] },
    { name: 'Nikhil Ahire', address: 'Soyagaon', role: ['user'] },
    { name: 'Swami Mistari', address: 'Chalisgaon', role: ['user'] },
    { name: 'Tushar Kedare', address: 'Mali', role: ['user'] },
  ]);
}
// createTable()  
module.exports = app;
