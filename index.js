const inquirer = require('inquirer');
const { listenerCount } = require('./db/connection');
const table = ('console.table');
const db = require('./db/connection');

const depts = [];
const roles = [];
const managers = [];
const employees = [];

function init() {
  inquirer.prompt([
    {
      type: "list",
      message: "Please choose an action from list below?",
      name: "options",
      choices:["Create Department","Add New Employee", "Remove Employee"]
    }
  ]).then(function(res){
    switch (res.options) {
      case "Create Department":
        return createDepartment();
      case "":
        return ;
      default:
        break;
    }
  })
  .then(function(res){
    switch (res.options) {
      case "Add New Employee":
        return createEmployee();
      case "":
        return "New Employee Created"
      default: "New Employee Created"
        break;
    }
  })
  .then(function(res){
    switch (res.options) {
      case "Remove Employee":
        return createEmployee();
      case "":
        return "Remove Employee"
      default: "Remove Employee"
        break;
    }
  })

// View all employees function 
viewEmployees() { db.findAllEmployees() .then(([rows]) => { let employees = rows; console.log("\n"); console.table (employees); }) .then(() => loadMainPrompts()); 
}

}

init();

function createDepartment(){
  console.log("working on it")
}