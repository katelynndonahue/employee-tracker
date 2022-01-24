const mysql = require('mysql2');
const util = require('util');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Starfish1!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  db.connect();

  db.query = util.promisify(db.query);

  module.exports = db;