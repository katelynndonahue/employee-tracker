const inquirer = require('inquirer');
const { listenerCount } = require('./db/connection');
require('console.table');
const db = require('./db/db');


function init() {
  inquirer.prompt([
    {
      type: "list",
      message: "Please choose an action from list below?",
      name: "options",
      choices:["Create Department",""]
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
}

init();


function createDepartment(){
  console.log("working on it")
}