require('dotenv').config();

const USERNAME = process.env.DBUSERNAME;
const PASSWORD= process.env.DBPASSWORD;
const NAME = process.env.DBNAME;
const HOST = process.env.DBHOST;


module.exports = {
  "development": {
    "username": USERNAME,
    "password": PASSWORD,
    "database": NAME,
    "host": HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username":"root" ,
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    
  }
}