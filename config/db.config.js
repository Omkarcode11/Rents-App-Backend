const developmentInstance = {
    DB : "library",
    USER : "root",
    PASSWORD : "omkar",
    DIALECT : "mysql",
    HOST : "localhost"
}

const testInstance = {
  DB: 'library_test_db',
  USER: 'root',
  PASSWORD: 'omkar',
  DIALECT: 'mysql',
  HOST: 'localhost',
};


module.exports = { development : developmentInstance,test: testInstance}