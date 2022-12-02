const developmentInstance = {
    DB : "library",
    USER : "root",
    PASSWORD : "omkar",
    dialect : "mysql",
    HOST : "mysql"
}

const testInstance = {
  DB: 'library_test_db',
  USER: 'root',
  PASSWORD: 'omkar',
  dialect: 'mysql',
  HOST: 'localhost',
};


module.exports = { development : developmentInstance,test: testInstance}