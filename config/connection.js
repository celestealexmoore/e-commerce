const Sequelize = require('sequelize');
// sequelize is basically the thing that marries the api config in mysqlpro to your backend code

require('.env').config();
// this is how we hide what's called our "enviroment variable," which in this
// case is the username, database name, etc because we don't want this sensitive info public


let sequelize;

if (process.env.JAWSDB_URL) {
  //if deployed via heroku, use the JAWS DB (database) otherwise, use localhost
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;