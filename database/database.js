const Sequelize = require('sequelize');
const USERNAME = process.env.DBUSERNAME;
const PASSWORD = process.env.DBPASSWORD;
const NAME = process.env.DBNAME;
const HOST = process.env.DBHOST;
const PORT = process.env.DBPORT;

const sequelize = new Sequelize(NAME, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    port: PORT
});

module.exports = sequelize;