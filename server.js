const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'rootROOT',
    database: 'courses_db'
  },
  console.log(`Connected to the employee_db database.`)
);


db.query(`DELETE FROM employee_names WHERE id = 3`, 3, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});




db.query('SELECT * FROM employee_names', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});