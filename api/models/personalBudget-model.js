const db = require("../../database/config/dbConfig");

module.exports = {
  find
  // findbyId,
  // add
};

function find() {
  return db("personalBudget");
}
