const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Starfish1!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  connection.connect();

  connection.query = util.promisify(connection.query);

  module.exports = connection;