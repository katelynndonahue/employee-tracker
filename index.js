const inquirer = require("inquirer");
const { findAllRoles } = require("./db/index");
require("console.table");
const db = require("./db/index");

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please choose an action from list below?",
        name: "options",
        choices: ["Show all Employees", "Show all Roles", "Create Department", "Add New Employee", "Remove Employee", "EXIT"],
      },
    ])
    .then(function (res) {
      switch (res.options) {
        case "Show all Employees":
          return allEmployees();
        case "Show all Roles":
          return allRoles();
        case "Show all Departments":
        return allDepartments();
        case "EXIT":
          return leaveApp();
      }
    })
}

init();

async function allEmployees(params) {
  const employees = await db.findAllEmployees();

  console.log("\n")
  console.table(employees);

  init();
}

async function allRoles(){
  const roles = await db.findAllRoles();

  console.log("\n")
  console.table(roles);

  init();
}
async function allDepartments(){
  const roles = await db.findAllDepartments();

  console.log("\n")
  console.table(departments);

  init();
}
function leaveApp(){
  process.exit();
}