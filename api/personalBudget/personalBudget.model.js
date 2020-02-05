const db = require("../../database/config/dbConfig");

module.exports = {
  findById,
  findByUserId,
  add,
  // updateById,
  update,
  remove
};

function findById(id) {
  return db("personalBudget")
    .where({ id })
    .first();
}

function findByUserId(userId) {
  return db("personalBudget").where({ user_id: userId });
  // .first();
}

function add(budget, userId) {
  return db("personalBudget")
    .insert({ ...budget, user_id: userId })
    .then(ids => {
      const id = ids[0];

      return db("personalBudget")
        .where({ id })
        .first()
        .then(budgets => {
          return budgets;
        });
    });
}

// function updateById(changes, id) {
//   return db("personalBudget")
//     .where({ id })
//     .update(changes)
//     .then(findById(id));
// }

function update(changes, id) {
  return db("personalBudget")
    .where({ user_id: id })
    .update(changes)
    .then(findById(id));
}

// FIXME:
function remove(id) {
  return db("personalBudget")
    .where({ id })
    .del();
}
