const db = require("../../database/config/dbConfig");

module.exports = {
  findById,
  findByUserId,
  add,
  update,
  remove
};

function findById(id) {
  return db("relocateBudget")
    .where({ id })
    .first();
}

function findByUserId(userId) {
  return db("relocateBudget").where({ user_id: userId });
  // .first();
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

// FIXME:
function update(changes) {
  return db("relocateBudget as pb")
    .update({ changes })
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

// FIXME:
function remove(id) {
  return db("relocateBudget")
    .where({ id })
    .del();
}
