const db = require("../../database/config/dbConfig");

module.exports = {
  find,
  add
};

function find(username) {
  return db("users").where(username);
}

function add(body) {
  return db("users").insert(body, "id");
}
