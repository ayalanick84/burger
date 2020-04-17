// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: (table, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // An example of updateValues: {name: panther, sleepy: true}
  // orm.update("cats", { name: "panther", sleepy: true }, { id = 1 }, (result) => console.log(result))
  // sends query, "UPDATE cats SET name = 'panther', sleepy=true WHERE id = 1;",
  // to mysql and prints the result to the console.
  update: (table, updateValues, condition, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    const values = [table, updateValues, condition];

    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Delete row(s) from table with given condition.
  // Condition must be an object with only one property.
  // e.g. { id: 1 } will delete cat where id is equal to 1.
  // { name: "Sylvester", sleepy: true } will result in an error.
  delete: (table, condition, cb) => {
    const queryString = "DELETE FROM ?? WHERE ?";
    const values = [table, condition];
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object
module.exports = orm;
