const db = require("../../database/config/dbConfig");

module.exports = {
  findById
  // update,
  // remove
};

function findById(id) {
  return db("users as u")
    .select("u.id", "u.username")
    .where({ id })
    .first();
}

// function update(changes, id) {
//   return db("users")
//     .where({ id })
//     .update(changes)
//     .then(findById(id));
// }

// function remove(id) {
//   return db("users")
//     .where({ id })
//     .del();
// }
