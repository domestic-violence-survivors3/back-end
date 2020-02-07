const db = require("../../database/config/dbConfig");

module.exports = {
  findById
};

function findById(id) {
  return db("users as u")
    .select("u.id", "u.username")
    .where({ id })
    .first();
}
