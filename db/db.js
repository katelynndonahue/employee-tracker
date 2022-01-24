// Requiring mysql2 package
const mysql = require("mysql2");

// Creating connection to departments_db database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Starfish1!',
  database: 'employee_db',
});

// Exporting db
module.exports = db;