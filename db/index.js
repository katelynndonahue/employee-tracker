const connection = require("./connection");

class DB {

    constructor(connection){
        this.connection = connection;
    }

    findAllEmployees(){
        return this.connection.query("SELECT * FROM employee");
    }

    findAllRoles(){
        return this.connection.query("SELECT * FROM role");
    }
}

module.exports = new DB(connection);