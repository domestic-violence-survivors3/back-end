const db = require("../../database/config/dbConfig");

module.exports = {
  findById,
  findByUserId,
  add,
  updateById,
  remove
};

function findById(id) {
  return db("relocateBudget")
    .where({ id })
    .first();
}

function findByUserId(userId) {
  return db("relocateBudget").where({ user_id: userId });
}

function add(budget, userId) {
  return db("relocateBudget")
    .insert({ ...budget, user_id: userId })
    .then(ids => {
      const id = ids[0];

      return db("relocateBudget")
        .where({ id })
        .first()
        .then(budgets => {
          return budgets;
        });
    });
}

function updateById(changes, id) {
  return db("relocateBudget")
    .where({ id })
    .update(changes)
    .then(findById(id));
}

function remove(id) {
  return db("relocateBudget")
    .where({ id })
    .del();
}
